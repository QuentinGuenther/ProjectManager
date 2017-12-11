import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class EditProject extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '',
			name: '',
			description: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentWillMount() {
		this.getProjectDetails();
	}

	getProjectDetails() {
		let projectID = this.props.match.params.id;

		Axios.get(`http://localhost:3000/api/Projects/${projectID}`)
			.then(response => {
				this.setState({
					id: response.data.id,
					name: response.data.name,
					description: response.data.description
				});
			});
	}

	editProject(newProject) {
		Axios.request({
			method: 'put',
			url: `http://localhost:3000/api/Projects/${this.state.id}`,
			data: newProject
		}).then(response => {
			this.props.history.push('/');
		});
	}

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

	render() {
		return (
			<div>
				<Link className="btn grey" to="/">Back</Link><br />
				<h1>Edit Project</h1>

				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="input-field">
						<input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
						<label htmlFor="name">Project Name</label>
					</div>
					<div className="input-field">
						<textarea name="description" ref="description" className="materialize-textarea" value={this.state.description} onChange={this.handleInputChange} />
						<label htmlFor="description">Project Description</label>
					</div>
					<input type="submit" value="Save" className="btn" />
				</form>
			</div>
		);
	}
}

export default EditProject;