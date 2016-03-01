// Main.js
"use strict";

// Sytlesheets
require('./styles.less');

// NPM Modules
const React = require('react');
const ReactDOM = require('react-dom');

// Project List
const projectList = require('./projectList.js');

// Script
const url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=magicjamesv&api_key=9cec0534e60b827aab0ae1b3e91baf82&format=json';
$.get(url, (data) => {
	let track = data.recenttracks.track[0];
	let element = document.getElementById("nowPlaying");
	element.innerHTML = data.recenttracks.track.length > 1 ? "(At the moment I'm listening to " : "(The last song I listened to was ";
	element.innerHTML += `<a href='${track.url}'>${track.name} by ${track.artist['#text']}</a>.)`;
});

const Project = React.createClass({
	render: function () {
		let project = this.props.project;
		let toolList = project.tools.map((tool, key) => {
			return <div key={key}><span className="label label-default tool">{tool}</span></div>;
		});
		return (
			<div className="project">
				<div className={"glyphicon glyphicon-" + project.glyphicon} aria-hidden="true"></div>
				<div className="pDescription">
					<div className="pTitle">
						<div className="pName">
							<h4><a href={project.url} target="_blank">{project.name}</a></h4>
						</div>
						<div className="toolList">{toolList}</div>
					</div>
					<p>{project.description} ({project.year})</p>
				</div>
			</div>
		);
	}
});

const Projects = React.createClass({
	render: function () {
		let projects = projectList.map(
			(project, index) => <Project key={index} project={project} />
		);
		return (
			<div>
				<h1>Projects</h1>
				{projects}
			</div>
		);
	}
});

ReactDOM.render(<Projects />, document.getElementById('projects'));
