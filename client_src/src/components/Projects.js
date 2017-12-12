import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
					console.log(this.state);
				});
			});
	}

	projectList() {
		const projectItems = this.state.projects.map((project, i) => {
			return (
				<ProjectItem key={project.id} item={project} />
			)
		});

		return (
			<ul className="collection">
				{projectItems}
			</ul>
		)
	}

	/**
	 * Render the Projects component
	 *
	 * @returns Projects component
	 */
	render() {	
		return (
			<div>
				<div className="row">
					<div className="col s12 l6">
						<h1 className="teal-text text-lighten-1 center">Projects</h1>

						{this.state.projects.length === 0 ? 
							<div className="warning white-text">
								<p className="center">You don't seem to have any projects right now <i className="fa fa-frown-o" aria-hidden="true"></i></p>
								<Link to="/projects/add" className="teal btn lighten-2">
	        						<span><i className="fa fa-plus"></i> Add one now!</span>
	      						</Link>
							</div> : this.projectList()}
						
					</div>
				</div>
				<div className="fixed-action-btn">
	      			<Link to="/projects/add" className="btn-floating btn-large teal lighten-2">
	        			<i className="fa fa-plus"></i>
	      			</Link>
    			</div>
			</div>
			
		);
	}
}

export default Projects;