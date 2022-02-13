// filename: login.js
document.querySelector('#loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.querySelector('#name').value
  const password = document.querySelector('#password').value

  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, password })
  }).then(res => {
    if (res.redirected) {
      window.location.href = res.url;
    } else {
      res.text().then(r => {
        alert(r);
      });
    }
  })
})