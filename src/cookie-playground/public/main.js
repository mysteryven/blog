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