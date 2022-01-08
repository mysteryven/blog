const path = require('path');
const fs = require('fs');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const { transformFromAst } = require('babel-core');

let id = 0;

function getId() { return id++; }

function createAssert(filename) {
  const dependencies = [];
  const content = fs.readFileSync(filename, {
    encoding: 'utf-8'
  });

  const ast = babylon.parse(content, {
    sourceType: 'module',
  });

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencies.push(node.source.value);
    },
    CallExpression ({ node }) {
      if (node.callee.name === 'require') {
        dependencies.push(node.arguments[0].value)
      }
    }
  })

  return {
    id: getId(),
    code: transformFromAst(ast, null, {
      presets: ['env'],
    }).code,
    filename,
    dependencies,
    mapping: {},
  };
}

function createGraph(entry) {
  const modules = [];
  const visitedAssert = {};

  createGraphImpl(
    path.resolve(__dirname, entry),
  );

  function createGraphImpl(absoluteFilePath) {
    // 如果已经访问过了，那就直接返回
    if (visitedAssert[absoluteFilePath]) {
      return visitedAssert[absoluteFilePath]
    }
    const assert = createAssert(absoluteFilePath);
    modules.push(assert);
    visitedAssert[absoluteFilePath] = assert.id;

    assert.dependencies.forEach(relativePath => {
      const absolutePath = path.resolve(
        path.dirname(assert.filename),
        relativePath
      );
      const childId = createGraphImpl(absolutePath);
      assert.mapping[relativePath] = childId;
    });

    return assert.id
  }

  return modules;
}

function bundle(graph) {
  let moduleStr = '';

  graph.forEach(module => {
    moduleStr += `
    ${module.id}: [
      function(require, module, exports) {
        ${module.code}
      },
      ${JSON.stringify(module.mapping)}
    ],
    `
  })

  const result = `
    (function(modules){
      // 增加对已访问模块的缓存
      let cache = {};
      
      console.log(cache);
      function require(id) {

        if (cache[id]) {
          console.log('直接从缓存中取')
          return cache[id].exports;
        }

        const [fn, mapping] = modules[id];

        const module = { exports: {} }
        cache[id] = module;
        fn(localRequire, module, module.exports)

        function localRequire(name) {
          return require(mapping[name])
        }       

        return module.exports;
      }

      require(0);
    })({${moduleStr}}) 
  `
  return result;
}

// const graph = createGraph('./example/index.js');
const graph = createGraph('./example/circle-main.js');
const res = bundle(graph);
console.log(res);