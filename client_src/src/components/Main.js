import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import ProjectDetails from './ProjectDetails';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Projects} />
			<Route exact path='/about' component={About} />
			<Route exact path='/projects/:id' component={ProjectDetails} />
		</Switch>
	</main>
);

export default Main;