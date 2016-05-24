const url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=magicjamesv&api_key=9cec0534e60b827aab0ae1b3e91baf82&format=json'

fetch(url).then(data => data.json()).then(data =>
  document.getElementById("nowPlaying").innerHTML = `
    ${data.recenttracks.track.length > 1 ? "(At the moment I'm listening to "
      : "(The last song I listened to was "}
    <a href='${data.recenttracks.track[0].url}'>
      ${data.recenttracks.track[0].name}
      by ${data.recenttracks.track[0].artist['#text']}
    </a>.)`)

document.getElementById("projects").innerHTML +=
  projects.map(project => `
		<div class="project">
      <div class="title">
        <h3><a href=${project.url} target="_blank">${project.name}</a></h3>
        <div class="toolList">
          ${project.tools.map(tool => '<span>'+tool+'</span>').join('')}
        </div>
      </div>
      <div>${project.description} (${project.year})</div>
		</div>`).join('')
