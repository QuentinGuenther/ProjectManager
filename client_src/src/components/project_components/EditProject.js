import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

/**
 * Edit Project page
 *
 * @author Quentin Guenther
 */
class EditProject extends Component {
	/**
	 * Initialize EditProject componant
	 *
	 * @param props 
	 */
	constructor(props) {
		super(props);

		this.state = {
			id: '',
			name: '',
			description: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this); // bind inputChange for all fields
	}

	/**
	 * Get the project details when componant is mounted
	 * 
	 * @see {@link getProjectDetails} 
	 */
	componentWillMount() {
		this.getProjectDetails();
	}

	/**
	 * Initialize EditProject componant
	 *
	 * @param props 
	 */
	getProjectDetails() {
		let projectID = this.props.match.params.id; // get id from url

		Axios.get(`http://localhost:3000/api/Projects/${projectID}`)
			.then(response => {
				this.setState({
					id: response.data.id,
					name: response.data.name,
					description: response.data.description
				});
			});
	}

	/**
	 * This method makes a put request to the server to change the project
	 *
	 * @param newProject A project object 
	 */
	editProject(newProject) {
		Axios.request({
			method: 'put',
			url: `http://localhost:3000/api/Projects/${this.state.id}`,
			data: newProject
		}).then(response => {
			this.props.history.push('/'); // Redirect to homepage
		});
	}
	
	/**
	 * This method creates a new project object
	 *
	 * @see {@link editProject}
	 * @param e Event listener
	 */
	onSubmit(e) {
		const newProject = {
			name: this.refs.name.value,
			description: this.refs.description.value
		}
		this.editProject(newProject);
		e.preventDefault();
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	/**
	 * Render the Edit Project component
	 *
	 * @returns Edit Project component
	 */
	render() {
		return (
			<div>
				<Link className="btn grey" to="/">Back</Link><br />
				<h1 className="teal-text text-lighten-1 center">Edit Project</h1>

				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="input-field">
						<input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
						<label htmlFor="name"  className="active">Project Name</label>
					</div>
					<div className="input-field">
						<input type="text" name="description" ref="description" value={this.state.description} onChange={this.handleInputChange} />
						<label htmlFor="description"  className="active">Project Description</label>
					</div>
					<input type="submit" value="Save" className="btn" />
				</form>
			</div>
		);
	}
}

export default EditProject;