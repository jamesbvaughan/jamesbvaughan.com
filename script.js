const url = 'http://ws.audioscrobbler.com/2.0/'
  + '?method=user.getrecenttracks'
  + '&limit=1'
  + '&user=magicjamesv'
  + '&api_key=9cec0534e60b827aab0ae1b3e91baf82'
  + '&format=json'

fetch(url)
  .then(data => data.json())
  .then(json => json.recenttracks.track)
  .then(tracks =>
    document.querySelector("#nowPlaying").innerHTML = `
      (${tracks.length > 1 ? "At the moment I'm listening to"
        : "The last song I listened to was"}
      <a href='${tracks[0].url}'>
        ${tracks[0].name} by ${tracks[0].artist['#text']}
      </a>.)`)

document.querySelector("#projects").innerHTML +=
  projects
    .map(({url, name, tools, description, year}) => `
      <div class="project">
        <div class="title">
          <h3><a href=${url} target="_blank">${name}</a></h3>
          <div class="toolList">
            ${tools.map(tool => '<span>'+tool+'</span>').join('')}
          </div>
        </div>
        <div>${description} (${year})</div>
      </div>`)
    .join('')
