import url2 from "../img/basket.png";

function Movie(props) {
	const { title, year, id, medium_cover_image: moviimg } = props;

	return (
		<div className='card movie'>
			<div className='card-image'>
				{moviimg === "N/A" ? (
					<img
						className='activator'
						src={`https://via.placeholder.com/300x430?text=${title}`}
						alt={id}
					/>
				) : (
					<img className='activator' src={moviimg} alt='spinner' />
				)}
			</div>
			<div className='card-content'>
				<span className='card-title'>{title}</span>
				<span>{" " + year}</span>
				<img src={url2} width='20' alt='basket' />
			</div>
		</div>
	);
}
export { Movie };
