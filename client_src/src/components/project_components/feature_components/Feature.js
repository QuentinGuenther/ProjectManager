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
			todoItems.push(<li key={this.state.details.todo[i].name}>{this.state.details.todo[i].name}</li>);
		}
		return(
			<div>
				<h5>{this.state.details.name}</h5>
				<p>{this.state.details.userStory}</p>
				<ul>
					{todoItems}
				</ul>
			</div>
		);
	}
}

export default Feature;