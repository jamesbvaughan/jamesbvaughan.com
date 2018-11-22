const fetch = require('node-fetch')
const qs = require('querystring')

const letterboxdURL = 'https://api.rss2json.com/v1/api.json?' + qs.stringify({
  rss_url: `https://letterboxd.com/${process.env.LETTERBOXD_USERNAME}/rss/`,
  api_key: process.env.RSS_2_JSON_API_KEY,
})

exports.handler = (_event, _context, callback) =>
  fetch(letterboxdURL)
    .then(r => r.json())
    .then(({ items: [movie] }) => {
      const link = `<a href="${movie.link}">${movie.title.match(/(.*),/)[1]}</a>`
      const body = 'the last movie I watched was ' + link

      callback(null, { statusCode: 200, body })
    })
    .catch(err => callback(err))
