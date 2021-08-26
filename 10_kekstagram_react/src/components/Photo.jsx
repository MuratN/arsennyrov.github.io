export function Photo(props) {
	const { url } = props;

	return (
		<div className='picture'>
			<img
				src={`../../${url}`}
				className='effect-image-preview picture'
				alt='photos'
			/>
		</div>
	);
}
