import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import About from './About';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Projects} />
			<Route exact path='/about' component={About} />
		</Switch>
	</main>
);

export default Main;