import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className='nav'>
			<div className='nav-wrapper'>
				<Link to='/' className='brand-logo'>
					YTS Movies
				</Link>
				<Link to='/basket' className='menu'>
					Basket
				</Link>
			</div>
		</nav>
	);
}

export { Header };
