import React, { useState } from 'react';
import useFormHook from '../hooks/formHook';
import useCopyHook from '../hooks/copyHook';

export default function HooksForm() {
	const initialState = { userName: '', password: '' };
	const [ dClick, setDClick ] = useCopyHook('');

	const [ formData, setDataForm ] = useFormHook(initialState);
	const [ clicks, setClicks ] = useState(0);
	const [ checked, setChecked ] = useState(false);

	// const handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setDataForm({ ...formData, [name]: value });
	// };
	const handleDClick = (e) => {
		console.log(dClick);
		setDClick(e);
	};
	const handleSubmit = () => {
		setClicks(clicks + 1);
	};
	const handleChecked = () => {
		setChecked(!checked);
		// if (checked) saveToLocalStorage('data', { formData, clicks, checked });
	};
	const saveToLocalStorage = (key, value) => {
		localStorage.setItem(key, JSON.stringify(value));
	};

	const checkboxChecker = () => {
		if (checked) saveToLocalStorage('data', { formData, clicks, checked });
	};

	return (
		<div className="container">
			<h1>Hello From Hooks React</h1>
			<form>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="userName"
						name="userName"
						placeholder="Enter name"
						onChange={setDataForm}
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
						onChange={setDataForm}
					/>
				</div>

				<button type="button" className="btn btn-lg btn-outline-primary" onClick={handleSubmit}>
					Login
				</button>
			</form>
			<p className="mt-2">Num of Login: {clicks}</p>
			<div className="custom-control custom-checkbox">
				<input
					type="checkbox"
					onChange={handleChecked}
					checked={checked}
					className="custom-control-input"
					id="customCheck1"
				/>
				<label className="custom-control-label" htmlFor="customCheck1">
					Save To Local Storage: {checkboxChecker()}
				</label>
			</div>
			<hr />
			<p onDoubleClick={handleDClick} className="mt-3">
				It is a long established fact that a reader will be distracted by the readable content of a page when
			</p>
		</div>
	);
}
