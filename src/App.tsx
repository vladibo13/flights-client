import React from 'react';
import FlightsRegister from './components/flights-register';
import FlightsHome from './components/flights-home/index';
import { Route, Switch } from 'react-router-dom';
const App: React.FC = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={FlightsHome} />
				<Route exact path="/register" component={FlightsRegister} />
			</Switch>
		</div>
	);
};

export default App;
