import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import React from "react";

export const Signin = () => {
    const {store, actions}=useContext(Context)
    const [eachEntry, setEachEntry]=useState(initialInputState);
    const initialInputState={email="", password=""};
    const handleInputChange = e => {
		setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
	};
    return(
        <form onSubmit={handleFinalSubmit}>
        <div className="form-group">
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