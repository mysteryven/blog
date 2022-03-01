const express = require('express')
const crypto = require('crypto')
const helmet = require('helmet');
const fs = require('fs');
const domain = 'test.com';
const port = 443;

const app = require("https-localhost")(domain)

const cookieParser = require("cookie-parser");

const NodeCache = require("node-cache");
const cookieCache = new NodeCache({ stdTTL: 10000 }); // cookie 10 秒过期

app.use(express.json());
app.use(cookieParser());

app.use(
  helmet.hsts({
    maxAge: 60 * 60 * 24 * 365, // 在访问 https 后，可以帮助我们自动跳转 http -> https 一年 
    includeSubDomains: true, // 是否包含子域名
    preload: true // 谷歌的一个服务，帮我们预加载，这样就不需要预先访问过一次 https 了
  })
);

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

app.post('/withdraw', (req, res) => {
  const { count } = req.body;
  console.log(req.body);
  const cookies = req.cookies;
  const hasLogin = cookieCache.has(cookies.sessionid);
  if (hasLogin) {
    res.send({
      msg: `成功转账${count}元`
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
    res.cookie('sessionid', uuid, {
      secure: true
    })
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
  console.log(`请打开浏览器的 https://test.com`)
})

const redirectApp = express();
redirectApp.use((req, res) => {
  res.redirect(`https://${domain}/${req.url}`);
})
redirectApp.listen(80)