const fetch = require('node-fetch')
const qs = require('querystring')

const lastfmURL = 'https://ws.audioscrobbler.com/2.0/?' + qs.stringify({
  method: 'user.getrecenttracks',
  limit: 1,
  user: process.env.LAST_FM_USERNAME,
  format: 'json',
  api_key: process.env.LAST_FM_API_KEY,
})

exports.handler = (_event, _context, callback) =>
  fetch(lastfmURL)
    .then(r => r.json())
    .then(({ recenttracks: { track } }) => {
      const linkBody = `${track[0].name} by ${track[0].artist['#text']}`
      const link = `<a href='${track[0].url}'>${linkBody}</a>`
      const text = track.length > 1
        ? 'at the moment I\'m listening to '
        : 'the last song I listened to was '
      const body = text + link

      callback(null, { statusCode: 200, body })
    })
    .catch(err => callback(err))
