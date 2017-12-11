import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Navbar component
 *
 * @author Quentin Guenther
 */
class Navbar extends Component {
  /**
   * Render the navbar component
   *
   * @returns navbar component
   */
	render() {
		return (
			<nav className="blue darken-3">
    			<div className="nav-wrapper">
      				<a href="/" className="brand-logo">ProjectManager</a>
      				<a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>
      				<ul className="right hide-on-small-only">
        				<li><Link to="/"><i className="fa fa-code-fork"></i> Projects</Link></li>
      				</ul>
      				<ul className="side-nav" id="main-menu">
      					<li><Link to="/"><i className="fa fa-code-fork"></i> Projects</Link></li>
      					<li><Link to="/projects/add"><i className="fa fa-plus"></i> Add Project</Link></li>
                <li><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></li>
     	 			</ul>
    			</div>
  			</nav>
		)
	}
}

export default Navbar;