const express = require('express')
const crypto = require('crypto')
const helmet = require('helmet');
const fs = require('fs');
const domain = 'evil.com';
const port = 444;

const app = require("https-localhost")(domain)

app.use(express.json());

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`请打开浏览器的 https://test.com`)
})
