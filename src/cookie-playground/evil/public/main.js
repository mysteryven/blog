fetch('https://test.com/withDraw', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    count: 10000
  })
}).then(res => {
  res.text().then(r => {
    alert(r)
  })
})