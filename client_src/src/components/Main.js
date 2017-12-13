import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './project_components/Projects';
import About from './About';
import ProjectDetails from './project_components/ProjectDetails';
import AddProject from './project_components/AddProject';
import EditProject from './project_components/EditProject';

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