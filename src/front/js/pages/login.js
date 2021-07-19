import { useState } from "react";
import React from "react";

export const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	return (
		<div className="m-auto">
			<h1>Login</h1>
			<input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
			<input
				type="password"
				placeholder="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button>Login</button>
		</div>
	);
};
