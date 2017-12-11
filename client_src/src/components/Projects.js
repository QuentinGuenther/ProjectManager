import React, { Component } from 'react';
import Axios from 'axios';
import ProjectItem from './ProjectItem';

class Projects extends Component {
	constructor() {
		super();

		this.state = {
			projects: []
		}
	}

	componentWillMount() {
		this.getProjects();
	}

	getProjects() {
		Axios.get('http://localhost:3000/api/Projects')
			.then(response => {
				this.setState({projects: response.data}, () => {
					//console.log(this.state);
				});
			});
	}

	render() {
		const projectItems = this.state.projects.map((project, i) => {
			return (
				<ProjectItem key={project.id} item={project} />
			)
		});

		return (
			<div>
				<h1>Projects</h1>
				<ul className="collection">
					{projectItems}
				</ul>
			</div>
		);
	}
}

export default Projects;