import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { registerUser, registerUserError } from '../../redux/actions';
import { Redirect } from 'react-router-dom';
const mainURL = 'http://localhost:5000/auth/register';

class FlightsRegister extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			userName: '',
			email: '',
			password: ''
		};
	}

	handleChange = (e: any) => {
		const { target } = e;
		this.setState({
			[target.name]: target.value
		});
	};

	// handleRegister = async () => {
	// 	const { onUserRegister } = this.props;

	// 	const result = await axios.post(mainURL, this.state);
	// 	const { error, message, redirect } = result.data;
	// 	if (error) return alert(error.details[0].message);
	// 	alert(message);
	// 	if (redirect) this.props.history.push('/');
	// };

	handleRegister = async () => {
		const { registerUser, userRegisterDetails, userRegisterError } = this.props;
		registerUser(this.state);
		console.log(userRegisterDetails);
		// alert(userRegisterDetails.message);
		// if (userRegisterDetails.redirect) this.props.history.push('/');
	};

	renderRedirect = () => {
		const { userRegisterDetails } = this.props;
		if (userRegisterDetails.redirect) {
			return <Redirect to="/" />;
		}
	};

	render() {
		const { registerUser, userRegisterDetails, userRegisterError } = this.props;
		return (
			<div className="container w-50 mx-auto">
				<h1 className="my-3 display-4 text-center">Register</h1>
				<form className="mb-3">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="ematextil"
							className="form-control"
							id="userName"
							name="userName"
							placeholder="Enter name"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="Enter email"
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
						Submit
					</button>
				</form>
				{userRegisterError.error && <p>Error: {userRegisterError.error}</p>}
				{this.renderRedirect()}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch: any) {
	// return {};
	return {
		registerUser: (user: any) => {
			dispatch(registerUser(user));
		}
	};
}

function mapStateToProps(state: any) {
	console.log('state from redux');
	return {
		...state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightsRegister);

// const mapDispatchToProps = (dispatch: any) => {
// 	return {
// 		reduxAction: {
// 			registerUser: (user: any) => {
// 				dispatch(saveMovieToFavorite(movie));
// 			}
// 		}
// 	};
// };

// const mapStateToProps = (state: any) => {
// 	return state;
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FlightsRegister);
