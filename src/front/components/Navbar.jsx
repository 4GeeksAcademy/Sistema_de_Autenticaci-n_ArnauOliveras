import { Link } from "react-router-dom";

export const Navbar = () => {
	const handleLogOut = () => {
		sessionStorage.removeItem('authToken');
		window.location.href = "/login";
	};
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary" onClick={handleLogOut}>Log out</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};