import React, { Component } from 'react';
import Axios from 'axios';
import ProjectItem from './ProjectItem';

/**
 * Projects homepage
 *
 * @author Quentin Guenther
 */
class Projects extends Component {
	/**
	 * Initialize Projects componant
	 *
	 * @param props 
	 */
	constructor() {
		super();

		this.state = {
			projects: []
		}
	}

	/**
	 * Get the projects when componant is mounted
	 * 
	 * @see {@link getProjectDetails} 
	 */
	componentWillMount() {
		this.getProjects();
	}

	/**
	 * Get the projects from the server
	 */
	getProjects() {
		Axios.get('http://localhost:3000/api/Projects')
			.then(response => {
				this.setState({projects: response.data}, () => {
					//console.log(this.state);
				});
			});
	}

	/**
	 * Render the Projects component
	 *
	 * @returns Projects component
	 */
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