// Main.js
"use strict";

// Sytlesheets
require('./styles.less');

// NPM Modules
var React = require('react');
var ReactDOM = require('react-dom');

// Script
$(document).ready(function () {
	let url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=magicjamesv&api_key=9cec0534e60b827aab0ae1b3e91baf82&format=json';
	$.get(url, (data) => {
		let track = data.recenttracks.track[0];
		let text = data.recenttracks.track.length > 1 ? "At the moment I'm listening to" : "The last song I listened to was";
		$(".nowPlaying").append(`${text} <a href='${track.url}'>${track.name} by ${track.artist['#text']}</a>.)`);
	});
});

var ToolIcon = React.createClass({
	render: function () {
		let size = 50;
		return (
				<img src={this.props.src} height={size} width={size} />
		);
	}
});

var Projects = React.createClass({
	getInitialState: function () {
		return {
			filterOpen: false
		};
	},
	toggleFilter: function () {
		this.setState({
			filterOpen: !this.state.filterOpen
		});
	},
	render: function () {
		let toggleClass = `glyphicon glyphicon-menu-${this.state.filterOpen ? "down" : "right"}`;
		let toolsStyle = { display: this.state.filterOpen ? "block" : "none" };
		let projectList = [
			{
				name: "Music Stats",
				description: "My attempts to find cool data in my music listening history.",
				url: "http://music.jamesbvaughan.com",
				github: "https://github.com/jamesbvaughan/music-stats",
				tools: [ "node", "react" ]
			},
			{
				name: "Hangout",
				description: "A tool for making closer friends and strengthening groups.",
				url: "http://hangout.jamesbvaughan.com",
				github: "https://github.com/jamesbvaughan/hangout",
				tools: [ "meteor" ]
			},
			{
				name: "Dining Menus",
				description: "A command-line tool for reading the UCLA dining hall menus.",
				github: "https://github.com/jamesbvaughan/dining-menus",
				tools: [ "python" ]
			}
		];
		let projects = projectList.map((project, index) => {
			return <Project key={index} project={project} />;
		});
		return (
			<div>
				<h3>Projects</h3>
				<div className="filterToggle" onClick={this.toggleFilter}>
					<span className={toggleClass} aria-hidden="true"></span>
					<span>Filter</span>
				</div>
				<div style={toolsStyle}>
					<ToolIcon src="public/images/node.svg" />
					<ToolIcon src="public/images/react.svg" />
					<ToolIcon src="public/images/meteor.png" />
					<ToolIcon src="public/images/python.svg" />
				</div>
				<div>
					{projects}
				</div>
			</div>
		);
	}
});

var Project = React.createClass({
	render: function () {
		let project = this.props.project;
		return (
			<div className="project">
				<h4>{project.name}</h4>
				<p>{project.description}</p>
			</div>
		);
	}
});

ReactDOM.render(
	<Projects />,
	document.getElementById('projects')
);
