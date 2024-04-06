import '../styles/header.css'
import logo from '../assets/flan-dark.png'

const Header = () => {
	return (
		<nav className="navbar py-0 fixed-top bg-dark">
			<div className="container justify-content-start">
				<div className="d-flex justify-content-center justify-content-lg-start w-100">
					<a
						href="#root"
						className="d-flex my-2 me-5 align-items-center text-light text-decoration-none"
					>
						<img src={logo} className="logo" />
						<p className="mb-0 fs-4">Flan's Portfolio</p>
					</a>
					<a
						href="#skills"
						className="d-none my-3 me-4 d-lg-flex text-light text-decoration-none justify-content-md-end"
					>
						<p className="mb-0 fs-5">Skills</p>
					</a>
					<a
						href="#projects"
						className="d-none my-3 me-4 d-lg-flex text-light text-decoration-none justify-content-md-end "
					>
						<p className="mb-0 fs-5">Projects</p>
					</a>
					<a
						href="#contacts"
						className="d-none my-3 me-4 d-lg-flex text-light text-decoration-none justify-content-md-end "
					>
						<p className="mb-0 fs-5">Contacts</p>
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Header
