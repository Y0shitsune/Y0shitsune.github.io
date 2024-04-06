import '../styles/billboard.css'
import picture from '../assets/mypicture.jpg'

const Billboard = () => {
	return (
		<section className="billboard-section">
			<div className="billboard"></div>
			<div className="billboard-content">
				<img src={picture} alt="me" className="MyPicture" />
				<div className="billboard-text">
					<h1>This is my portfolio</h1>
					<h2>
						I am a programmer
						<div className="hidden-text">apparently.</div>
					</h2>
				</div>
			</div>
		</section>
	)
}
export default Billboard
