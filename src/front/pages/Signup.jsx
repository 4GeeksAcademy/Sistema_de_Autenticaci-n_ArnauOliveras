import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [error, setError] = useState(false);

    const handleCheckPassword = (value) => {
        setPassword(value);
        if (confirmPassword !== value) {
            setErrorConfirmPassword("border-danger");
            setError(true);
        } else {
            setErrorConfirmPassword("");
            setError(false);
        }
    };
    const handleCheckRepeatPassword = (value) => {
        setconfirmPassword(value);
        if (password !== value) {
            setErrorConfirmPassword("border-danger");
            setError(true);
        } else {
            setErrorConfirmPassword("");
            setError(false);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!error) {
            const response = await fetch("http://localhost:3001/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) window.location.href = "/login";
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center text-center py-4 bg-body-tertiary m-5">
            <div >
                <div style={{ width: "400px" }} >
                    <h1 className="h3 mb-4 fw-normal">Please sign up</h1>


                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => handleCheckPassword(e.target.value)} required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className={"form-control " + errorConfirmPassword} id="confirmPassword" value={confirmPassword} placeholder="Password" onChange={(e) => handleCheckRepeatPassword(e.target.value)} required />
                        <label htmlFor="confirmPassword">Repeat password</label>
                    </div>

                    <button className="btn btn-primary w-50 py-2" type="submit" onClick={handleSubmit}>Sign Up</button>
                </div>
                <div className="ml-auto mt-3">
                    <Link to="/login">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}; 