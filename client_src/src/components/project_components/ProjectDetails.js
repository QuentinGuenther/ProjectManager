import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Feature from './feature_components/Feature';

/**
 * Project details page
 *
 * @author Quentin Guenther
 */
class ProjectDetails extends Component {
	/**
	 * Initialize ProjectDetails componant
	 *
	 * @param props 
	 */
	constructor(props) {
		super(props);

		this.state = {
			details: ''
		}
	}

	/**
	 * Get the project details when componant is mounted
	 * 
	 * @see {@link getProjectDetails} 
	 */
	componentWillMount() {
		this.getProject();
	}

	/**
	 * Get the details of the project from the server
	 */
	getProject() {
		let projectID = this.props.match.params.id;

		Axios.get(`http://localhost:3000/api/Projects/${projectID}`)
			.then(response => {
				this.setState({details: response.data}, () => {
					//console.log(this.state);
				});
			});
	}

	/**
	 * Send delete request to server for project
	 */
	onDelete() {
		let projectID = this.state.details.id;

		Axios.delete(`http://localhost:3000/api/Projects/${projectID}`)
			.then(response => {
				this.props.history.push('/'); // Redirect to homepage
			});
	}

	/**
	 * Initialize EditProject componant
	 *
	 * @param props 
	 */
	render() {
		return (
			<div>
				<Link className="btn grey" to="/">Back</Link><br />
				<h1 className="teal-text text-lighten-1 truncate">{this.state.details.name}</h1>
				<Link className="btn" to={`./edit/${this.state.details.id}`}>Edit</Link>
				<button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
				<blockquote className="flow-text">{this.state.details.description}</blockquote>

				<Feature key="5a30bfe65434a40b70ea3acf"/>
			</div>
		);
	}
}

export default ProjectDetails;