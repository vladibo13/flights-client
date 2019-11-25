import React from 'react';
import axios from 'axios';
import { registerUser } from '../../redux/actions';
import { connect } from 'react-redux';
const mainURL = 'http://localhost:5000/getFlights';

class Flights extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { flights: [], loading: false, error: '' };
	}

	async componentDidMount() {
		console.log('hello from component did mount');
		this.setState({ loading: true });
		const result = await axios.get(mainURL);
		//const reduxThunkResult = registerUser()

		const { flights, error } = result.data;
		console.log(flights);
		if (error) {
			this.setState({
				error,
				flights: [],
				loading: true
			});
		} else {
			this.setState({ flights, loading: true });
		}
	}
	render() {
		if (!this.state.loading) return <div>Loading...true</div>;
		if (this.state.error) return <p>{this.state.error}</p>;
		return <h1>{this.state.flights.map((flight: any) => <p>{flight.company}</p>)}</h1>;
	}
}

function mapDispatchToProps(dispatch: any) {
	// return {};
	return {};
}

function mapStateToProps(state: any) {
	console.log('state from redux');
	return {
		...state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Flights);
