import '../styles/carouselImage.css'

const Modals = (props: any) => {
	const url = `../assets/${props.fileName}`

	return (
		<>
			<img
				src={url}
				className="carousel-image"
				alt="..."
				data-bs-toggle="modal"
				data-bs-target={'#' + props.refID}
			></img>

			<div
				className="modal fade"
				id={props.refID}
				tabIndex={-1}
				aria-labelledby={props.refID}
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id={props.refID}>
								{props.projectTitle}
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							{/* redirect to project, uses props */}
							<a href="/">
								<img src={url} alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modals
