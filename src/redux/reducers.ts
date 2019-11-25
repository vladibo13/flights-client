import Actions from './actions.config';

const initialState = {
	flights: [],
	userRegisterDetails: {
		message: '',
		redirect: false
	},
	userLoginDetails: {
		token: ''
	},
	userLoginError: {
		error: ''
	},
	userRegisterError: {
		error: ''
	}
};

export default function root(state = initialState, action: any) {
	switch (action.type) {
		case Actions.LOGIN_USER_DETAILS: {
			const { token } = action.payload.details;

			return {
				...state,
				userLoginDetails: { token }
			};
		}

		case Actions.LOGIN_USER_ERROR: {
			console.log(state);

			const { error } = action.payload;
			return {
				...state,
				userLoginError: { error }
			};
		}

		case Actions.REGISTER_USER_ERROR: {
			console.log(state);

			const { error } = action.payload;
			return {
				...state,
				userRegisterError: { error }
			};
		}

		case Actions.REGISTER_USER_DETAILS: {
			const { message, redirect, token } = action.payload.details;

			return {
				...state,
				userRegisterDetails: {
					redirect,
					message
				},
				userLoginDetails: { token }
			};
		}

		case Actions.REGISTER_USER_MESSAGE: {
			console.log(state);

			const { message } = action.payload;
			return {
				...state,
				message
			};
		}

		case Actions.REGISTER_USER_REDIRECT: {
			console.log(state);

			const { redirect } = action.payload;
			return {
				...state,
				redirect
			};
		}

		default:
			return state;
	}
}
