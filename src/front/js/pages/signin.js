import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import React from "react";
import { apiBaseUrl } from "../store/constants";

export const Signin = () => {
	const { store, actions } = useContext(Context);
	const [eachEntry, setEachEntry] = useState(initialInputState);
	const initialInputState = { email: "", password: "" };
	const handleInputChange = e => {
		setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
	};

	const handleFinalSubmit = e => {
		e.preventDefault();

		var raw = JSON.stringify(eachEntry);

		var requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: raw
		};

		fetch(apiBaseUrl + "/api/sign_in", requestOptions)
			.then(response => response.text())
			.then(result => {
				console.log("User signed in");
				//history.push("/");
			})
			.catch(error => console.log("error", error));
	};

	return (
		<form onSubmit={handleFinalSubmit}>
			<div className="form-group">
				<h1>Signin</h1>
				<label htmlFor="exampleInputEmail">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail"
					placeholder="Enter email"
					name="email"
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword">Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword"
					placeholder="Enter your password"
					name="password"
					onChange={handleInputChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary float-right">
				Submit
			</button>
		</form>
	);
};
