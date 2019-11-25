import axios from 'axios';

export const registerUserService = async (url: string, dataFromServer: any) => {
	try {
		// const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
		const result = await axios.post(url, dataFromServer);
		return result.data;
	} catch (ex) {
		return [];
	}
};

export const loginUserService = async (url: string, dataFromServer: any) => {
	try {
		// const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
		const result = await axios.post(url, dataFromServer);
		return result.data;
	} catch (ex) {
		return [];
	}
};
