import '../styles/projects.css'
import CarouselImage from './CarouselImage'

const Projects = () => {
	return (
		<section className="projects">
			<div className="carousel-container">
				<div id="project-carousel" className="carousel slide">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<CarouselImage
								fileName="bg.jpg"
								projectTitle="Tokyo Street"
								refID="picture1"
							/>
						</div>
						<div className="carousel-item">
							<CarouselImage
								fileName="fwmc.webp"
								projectTitle="Cute Girls"
								refID="picture2"
							/>
						</div>
						<div className="carousel-item">
							<CarouselImage
								fileName="9f5be-16824439274536.avif"
								projectTitle="No Enemies"
								refID="picture3"
							/>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#project-carousel"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>

					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#project-carousel"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Projects
