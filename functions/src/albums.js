import fetch from 'node-fetch'

const discogsURL =
  `https://api.discogs.com/lists/447073?token=${process.env.DISCOGS_TOKEN}`

exports.handler = (_event, _context, callback) =>
  fetch(discogsURL)
    .then(res => res.json())
    .then(({ items }) =>
      callback(null, { statusCode: 200, body: JSON.stringify(items) }))
    .catch(err => callback(err))
