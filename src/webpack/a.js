
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
    })({
    0: [
      function(require, module, exports) {
        "use strict";

var _foo = require("./foo.js");

var _foo2 = _interopRequireDefault(_foo);

var _bar = require("./bar.js");

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _foo2.default)();
(0, _bar2.default)();
      },
      {"./foo.js":1,"./bar.js":2}
    ],
    
    1: [
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bar = require("./bar.js");

var _bar2 = _interopRequireDefault(_bar);

var _message = require("./message.js");

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _bar2.default)();

function foo() {
  console.log(_message2.default);
}

exports.default = foo;
      },
      {"./bar.js":2,"./message.js":3}
    ],
    
    2: [
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _foo = require("./foo.js");

var _foo2 = _interopRequireDefault(_foo);

var _message = require("./message.js");

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _foo2.default)();

function bar() {
  console.log(_message2.default);
}

exports.default = bar;
      },
      {"./foo.js":1,"./message.js":3}
    ],
    
    3: [
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var message = 'hello world';

function hi() {}

exports.default = message;
      },
      {}
    ],
    }) 
  
