const url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=magicjamesv&api_key=9cec0534e60b827aab0ae1b3e91baf82&format=json';

$.get(url, (data) => {
	let track = data.recenttracks.track[0];
	let element = document.getElementById("nowPlaying");
	element.innerHTML = data.recenttracks.track.length > 1 ?
		"(At the moment I'm listening to " : "(The last song I listened to was ";
	element.innerHTML += `<a href='${track.url}'>${track.name}`;
	element.innerHTML += ` by ${track.artist['#text']}</a>.)`;
});

projects.forEach(project => {
	let element = document.getElementById("projects");
	let toolList = project.tools.map(tool => {
		return `<span class="label label-default tool">${tool}</span>`;
	}).join('');
	element.innerHTML += `
		<div class="project">
			<div class="glyphicon glyphicon-${project.glyphicon}"></div>
			<div class="description">
				<div class="title">
					<div class="name">
						<h4><a href=${project.url} target="_blank">${project.name}</a></h4>
					</div>
					<div class="toolList">${toolList}</div>
				</div>
				<p>${project.description} (${project.year})</p>
			</div>
		</div>`;
});
