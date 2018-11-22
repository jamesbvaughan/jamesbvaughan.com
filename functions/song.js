const https = require('https')
const qs = require('querystring')

const lastfmURL = 'https://ws.audioscrobbler.com/2.0/?' + qs.stringify({
  method: 'user.getrecenttracks',
  limit: 1,
  user: 'magicjamesv',
  format: 'json',
  api_key: process.env.LAST_FM_API_KEY,
})

exports.handler = (_event, _context, callback) =>
  https.get(lastfmURL, res => {
    let data = ''
    res.on('data', d => data += d)
    res.on('end', () => {
      const { recenttracks: { track } } = JSON.parse(data)
      const linkBody = `${track[0].name} by ${track[0].artist['#text']}`
      const link = `<a href='${track[0].url}'>${linkBody}</a>`
      const text = track.length > 1
        ? 'at the moment I\'m listening to '
        : 'the last song I listened to was '
      const body = text + link

      callback(null, { statusCode: 200, body })
    })
  }).on('error', err => callback(err))
