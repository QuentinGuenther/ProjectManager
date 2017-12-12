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
			<Link to={`/projects/${this.state.item.id}`}>
				<li className="collection-item light-green darken-1 white-text z-depth-2 truncate">
					<b>{this.state.item.name}<i className="fa fa-paper-plane left" aria-hidden="true"></i></b>
				</li>
			</Link>
		);
	}
}

export default ProjectItem