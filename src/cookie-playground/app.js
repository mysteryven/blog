const express = require('express')
const crypto = require('crypto')
const fs = require('fs');
const app = express()
const port = 3000;
const cookieParser = require("cookie-parser");

const NodeCache = require("node-cache");
const cookieCache = new NodeCache({ stdTTL: 10 }); // cookie 10 秒过期

app.use(express.json());
app.use(cookieParser());

app.get('/', function (req, res) {
  const cookies = req.cookies;
  const hasLogin = cookieCache.has(cookies.sessionid);
  if (hasLogin) {
    return res.redirect('/index.html');
  } else {
    return res.redirect('/login.html')
  }
});

app.get('/getUserInfo', function (req, res) {
  const cookies = req.cookies;
  const hasLogin = cookieCache.has(cookies.sessionid);
  if (hasLogin) {
    res.send({
      name: cookieCache.get(cookies.sessionid)
    })
  } else {
    return res.redirect('/login.html')
  }
})

app.post('/login', (req, res) => {
  const { name, password } = req.body;
  const users = readFromDB();

  if (users[name] && password !== users[name]) {
    res.send({ success: false, message: '密码不正确' });
    return;
  }

  // 用户名不存在，新用户直接注册
  if (!users[name]) {
    users[name] = password;
  }

  const uuid = crypto.randomUUID();
  if (!cookieCache.has(name)) {
    cookieCache.set(uuid, name);
    res.cookie('sessionid', uuid)
  }

  syncUsersToDB(users)

  res.redirect('/')
})

app.use(express.static('public'))

function readFromDB() {
  const db = fs.readFileSync('./db.txt', {
    encoding: 'utf-8'
  }).trim();

  const users = {};
  db.split('\n').forEach(item => {
    const [k, v] = item.split('=');
    users[k] = v
  })
  return users;
}

function syncUsersToDB(users) {
  let ret = [];
  for (let key in users) {
    if (key && users[key]) {
      ret.push(`${key}=${users[key]}`);
    }
  }

  fs.writeFileSync('./db.txt', ret.join('\n'), {
    encoding: 'utf-8'
  });
}

app.listen(port, () => {
  console.log(`请打开浏览器的 http://localhost:3000`)
})