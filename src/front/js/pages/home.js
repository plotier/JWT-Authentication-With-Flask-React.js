import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Login } from "./login";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Registro</h1>

			<div />

			<div>
				<Login />
			</div>
			<br />
			<br />
			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
		</div>
	);
};
