['song', 'movie'].forEach(item =>
  fetch(`https://api.jamesbvaughan.com/${item}`)
    .then(r => r.json())
    .then(({ status, body }) =>
      status === 'ok' &&
        (document.getElementById(item).innerHTML = ` (${body})`)))
