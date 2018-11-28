import fetch from 'node-fetch'
import qs from 'querystring'

const discogsURL = 'https://api.discogs.com/lists/447073?' + qs.stringify({
  token: process.env.DISCOGS_TOKEN,
})

exports.handler = (event, context, callback) => {
  fetch(discogsURL)
    .then(res => res.json())
    .then(({ items }) => {
      const body = JSON.stringify(items)
      callback(null, { statusCode: 200, body })
    })
    .catch(err => callback(err))
}
