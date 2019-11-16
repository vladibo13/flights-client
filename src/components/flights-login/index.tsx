import React from 'react';
import axios from 'axios';
const mainURL = 'http://localhost:5000/auth/login';

class FlightsLogin extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			userName: '',
			password: ''
		};
	}

	saveToLocalStorage = (key: any, value: any) => {
		localStorage.setItem(key, JSON.stringify(value));
	};

	handleChange = (e: any) => {
		const { target } = e;
		this.setState({
			[target.name]: target.value
		});
	};

	handleRegister = async () => {
		// console.log(this.state);
		const result = await axios.post(mainURL, this.state);
		//check if there some errors
		const { error, message, redirect, session } = result.data;
		if (error) return alert(error);
		alert(`${message}. your session number: ${session}`);
		this.saveToLocalStorage(`flight-session-${session}`, session);
		//redirect if i pass from server to home page
		if (redirect) this.props.history.push('/');
	};
	render() {
		return (
			<div className="container w-50 mx-auto">
				<h1 className="display-4 text-center my-3">Welcome From Flights Login</h1>
				<form>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							className="form-control"
							id="userName"
							name="userName"
							placeholder="Enter name"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							placeholder="Enter Password"
							onChange={this.handleChange}
						/>
					</div>

					<button type="button" className="btn btn-lg btn-outline-primary" onClick={this.handleRegister}>
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default FlightsLogin;
