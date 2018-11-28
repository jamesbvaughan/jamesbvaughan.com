import fetch from 'node-fetch'
import qs from 'querystring'
import { parseString } from 'xml2js'

const letterboxdURL = 'https://letterboxd.com/jamesbvaughan/rss'

exports.handler = (event, context, callback) =>
  fetch(letterboxdURL)
    .then(res => res.text())
    .then(res => {
      parseString(res, (err, json) => {
        if (err) {
          callback(err)
          return
        }
        const movie = json.rss.channel[0].item[0]
        const url = movie.link[0]
        const title = movie.title[0].match(/(.*),/)[1]

        const body = `the last movie I watched was <a href="${url}">${title}</a>`

        callback(null, { statusCode: 200, body })
      })
    })
    .catch(err => callback(err))
