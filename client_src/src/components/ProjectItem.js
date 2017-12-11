import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component to list each project as a list item
 *
 * @author Quentin Guenther
 */
class ProjectItem extends Component {
	/**
	 * Initialize ProjectItem componant
	 *
	 * @param props 
	 */
	constructor(props) {
		super(props);

		this.state = {
			item: props.item
		}
	}

	/**
	 * Render the ProjectItem component
	 *
	 * @returns ProjectItem component
	 */
	render() {
		return (
			<li className="collection-item">
				<Link to={`/projects/${this.state.item.id}`}>{this.state.item.name}</Link>
			</li>
		);
	}
}

export default ProjectItem