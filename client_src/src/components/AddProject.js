import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class AddProject extends Component {
	addProject(newProject) {
		Axios.request({
			method: 'post',
			url: 'http://localhost:3000/api/Projects/',
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
		this.addProject(newProject);
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<Link className="btn grey" to="/">Back</Link><br />
				<h1>Add Project</h1>

				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="input-field">
						<input type="text" name="name" ref="name" />
						<label htmlFor="name">Project Name</label>
					</div>
					<div className="input-field">
						<textarea name="description" ref="description" className="materialize-textarea" />
						<label htmlFor="description">Project Description</label>
					</div>
					<input type="submit" value="Save" className="btn" />
				</form>
			</div>
		);
	}
}

export default AddProject;