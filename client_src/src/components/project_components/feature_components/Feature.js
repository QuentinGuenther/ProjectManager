import React, { Component } from 'react';
import Axios from 'axios';

class Feature extends Component {
	constructor(props) {
		super(props);

		this.state = {
			details: []
		}
	}

	componentWillMount() {
		this.getFeature();
	}

	getFeature() {
		let featureID = "5a30bfe65434a40b70ea3acf";

		Axios.get(`http://localhost:3000/api/Features/${featureID}`)
			.then(response => {
				this.setState({details: response.data}, () => {
					console.log(this.state);
				});
			});
	}

	render() {
		let todoItems = []; 
		for(let i in this.state.details.todo){
			todoItems.push(
				<p key={this.state.details.todo[i].name}>
					<input 
						type="checkbox" 
						className="filled-in" 
						name={this.state.details.todo[i].name} 
						id={this.state.details.todo[i].name} />
					<label htmlFor={this.state.details.todo[i].name}>{this.state.details.todo[i].name}</label>
				</p>);
		}
		return(
			<div>
				<div className="card">
					<div className="card-content">
						<span className="card-title">{this.state.details.name}</span>
						<p>{this.state.details.userStory}</p>
						<div className="card-action">
							<form>
								{todoItems}
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Feature;