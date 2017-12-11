import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import ProjectDetails from './ProjectDetails';
import AddProject from './AddProject';
import EditProject from './EditProject';

/**
 * Control the front-end routes
 * 
 * @author Quentin Guenther
 */
const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Projects} />
			<Route exact path='/about' component={About} />
			<Route exact path='/projects/add' component={AddProject} />
			<Route exact path='/projects/edit/:id' component={EditProject} />
			<Route exact path='/projects/:id' component={ProjectDetails} />
		</Switch>
	</main>
);

export default Main;