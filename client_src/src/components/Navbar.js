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
			<nav className="light-green darken-3">
    			<div className="nav-wrapper">
      				<a href="/" className="brand-logo center white-text flow-text"><b>ProjectManager</b></a>
      				<a data-activates="main-menu" className="button-collapse show-on-large"><b><i className="fa fa-bars white-text"></i></b></a>
      				<ul className="right hide-on-small-only">
        				<li><Link to="/" className="white-text"><i className="fa fa-code-fork"></i> <b>Projects</b></Link></li>
      				</ul>
      				<ul className="side-nav grey lighten-2" id="main-menu">
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