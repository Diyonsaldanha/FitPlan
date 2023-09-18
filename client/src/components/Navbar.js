import React from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useCookies } from "react-cookie";

export const Navbar = () => {
   // const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const username = localStorage.getItem('username')
    console.log(username)
    const logout = () => {
    //    setCookies("access_token", "");
        window.localStorage.clear();
        navigate("/login");

    };
    let menu;
    if (username === "admin") {
        menu = (<div>
            <Link to="#">FitPlan</Link>

            <Link to="/">Home</Link>
            <button onClick={logout}> Logout </button>
        </div>)
    }
    else if (username !== "admin" && username !== null) {
        menu = (<div>
            {/* <Link to="/info">Info</Link> */}
            <Link to="#">FitPlan</Link>

            <button onClick={logout}> Logout </button>
        </div>)
    }
    else if (username === null) {
        menu = (
            <div>
                <Link to="#">FitPlan</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        )
    }


    return (
        <div className="navbar">
            {/* <Link to="/">Home</Link>
            {!cookies.access_token ? (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            ) : (
                <div>

                    <button onClick={logout}> Logout </button>
                </div>
            )} */}
            {menu}
        </div>
    );
};