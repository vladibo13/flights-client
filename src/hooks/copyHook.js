import React, { useState } from 'react';

export default function useCopyHook(initialState) {
	const [ data, setData ] = useState(initialState);

	const handleChange = (event) => {
		const { innerText } = event.target;

		setData({ data: innerText });
		console.log(data);
	};

	return [ data, handleChange ];
}
