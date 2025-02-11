import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem("token", data.token);
            window.location.href = "/private";
        }
        console.log("Email:", email, "Password:", password);
    };

    return (
        <div className="d-flex align-items-center justify-content-center text-center py-4 bg-body-tertiary m-5">
            <div >
                <div style={{ width: "400px" }} >
                    <h1 className="h3 mb-4 fw-normal">Please log in</h1>

                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="password" />
                        <label className="form-check-label" htmlFor="password">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-50 py-2" type="submit" onClick={handleSubmit}>Log in</button>
                </div>
                <div className="ml-auto mt-3">
                    <Link to="/signup">
                        Don't have account? Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}; 