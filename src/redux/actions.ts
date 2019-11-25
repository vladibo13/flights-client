import ACTIONS from './actions.config';
import axios from 'axios';
import { registerUserService } from './service';
import { type } from 'os';

export const registerUser = (user: any) => {
	return async (dispatch: any) => {
		const registerURL = 'http://localhost:5000/auth/register';
		const result = await registerUserService(registerURL, user);
		const { error, message, redirect, token } = result;
		if (error) dispatch(registerUserError(error.details[0].message));
		else dispatch(registerUserDetails({ redirect, message, token }));
	};
};

export const loginUser = (user: any) => {
	return async (dispatch: any) => {
		const registerURL = 'http://localhost:5000/auth/register';
		const result = await registerUserService(registerURL, user);
		const { error, token } = result;
		if (error) dispatch(loginUserError(error.details[0].message));
		else dispatch(loginUserDetails({ token }));
	};
};

export const loginUserDetails = (details: any) => ({
	type: ACTIONS.LOGIN_USER_DETAILS,
	payload: { details }
});

export const registerUserDetails = (details: any) => ({
	type: ACTIONS.REGISTER_USER_DETAILS,
	payload: { details }
});

export const registerUserMessage = (message: any) => ({
	type: ACTIONS.REGISTER_USER_MESSAGE,
	payload: { message }
});

export const registerUserRedirect = (redirect: any) => ({
	type: ACTIONS.REGISTER_USER_REDIRECT,
	payload: { redirect }
});

export const registerUserError = (error: any) => ({
	type: ACTIONS.REGISTER_USER_ERROR,
	payload: { error }
});

export const loginUserError = (error: any) => ({
	type: ACTIONS.LOGIN_USER_ERROR,
	payload: { error }
});
