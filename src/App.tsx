import React from 'react';
import FlightsRegister from './components/flights-register';
import FlightsHome from './components/flights-home/index';
import FlightsLogin from './components/flights-login';
import Flights from './components/flights';
import { Route, Switch } from 'react-router-dom';
import HooksForm from './components/hooksForm';
const App: React.FC = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={FlightsHome} />
				<Route exact path="/flights" component={Flights} />
				<Route exact path="/register" component={FlightsRegister} />
				<Route exact path="/login" component={FlightsLogin} />
				<Route exact path="/hooks" component={HooksForm} />
			</Switch>
		</div>
	);
};

export default App;
