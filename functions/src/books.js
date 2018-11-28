import fetch from 'node-fetch'
import qs from 'querystring'
import { parseString } from 'xml2js'

const goodreadsURL = 'https://www.goodreads.com/review/list?' + qs.stringify({
  v: 2,
  id: 27529153,
  shelf: 'read',
  sort: 'date_updated',
  key: process.env.GOODREADS_API_KEY,
})

exports.handler = (event, context, callback) => {
  fetch(goodreadsURL)
    .then(res => res.text())
    .then(res => {
      parseString(res, (err, json) => {
        if (err) {
          callback(err)
          return
        }
        const books = json.GoodreadsResponse.reviews[0].review.map(book => ({
          url: book.book[0].link[0],
          image_url: book.book[0].image_url[0],
          title: book.book[0].title[0],
          read: book.read_at[0],
          updated: book.date_updated[0],
        }))

        const body = JSON.stringify(books)
        callback(null, { statusCode: 200, body })
      })
    })
    .catch(err => callback(err))
}
