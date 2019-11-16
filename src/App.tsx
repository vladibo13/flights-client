import React from 'react';
import FlightsRegister from './components/flights-register';
import FlightsHome from './components/flights-home/index';
import FlightsLogin from './components/flights-login';
import { Route, Switch } from 'react-router-dom';
const App: React.FC = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={FlightsHome} />
				<Route exact path="/register" component={FlightsRegister} />
				<Route exact path="/login" component={FlightsLogin} />
			</Switch>
		</div>
	);
};

export default App;
