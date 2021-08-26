export function Message(props) {
	const { avatar, comment } = props;

	return (
		<div className='gallery_ul'>
			<div className='social__comment social__comment--text'>
				<img
					className='social__picture'
					src={avatar}
					alt='Аватар комментатора фотографии'
					width='35'
					height='35'
				/>
				<p className='social__text'>{comment}</p>
			</div>
		</div>
	);
}
