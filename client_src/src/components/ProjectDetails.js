import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class ProjectDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			details: ''
		}
	}

	componentWillMount() {
		this.getProject();
	}

	getProject() {
		let projectID = this.props.match.params.id;

		Axios.get(`http://localhost:3000/api/Projects/${projectID}`)
			.then(response => {
				this.setState({details: response.data}, () => {
					//console.log(this.state);
				});
			});
	}

	onDelete() {
		let projectID = this.state.details.id;

		Axios.delete(`http://localhost:3000/api/Projects/${projectID}`)
			.then(response => {
				this.props.history.push('/');
			});
	}

	render() {
		return (
			<div>
				<Link className="btn grey" to="/">Back</Link><br />
				<h1>{this.state.details.name}</h1>
				<Link className="btn" to={`./edit/${this.state.details.id}`}>Edit</Link>
				<button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
				<blockquote className="flow-text">{this.state.details.description}</blockquote>

			</div>
		);
	}
}

export default ProjectDetails;