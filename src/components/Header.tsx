import '../styles/header.css'
import logo from '../assets/flan-dark.png'

const Header = () => {
	return (
		<nav className="navbar sticky-top bg-dark">
			<div className="container-fluid">
				<a
					href="/"
					className="d-flex mx-5 align-items-center text-light text-decoration-none"
				>
					<img src={logo} className="logo" />
					<span className="fs-5">Flan's Portfolio</span>
				</a>
			</div>
		</nav>
	)
}

export default Header
