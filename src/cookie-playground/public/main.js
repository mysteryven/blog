fetch('/getUserInfo', {
  method: 'GET',
}).then(res => {
  if (!res.redirected) {
    res.text().then(r => {
      document.querySelector('#userName').textContent = JSON.parse(r).name;
    });
  } else {
    window.location.href = res.url
  }
})




const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const count = document.querySelector('#count').value;
  fetch('/withDraw', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      count
    })
  }).then(res => {
    res.text().then(r => {
      alert(r)
    })
  })
})