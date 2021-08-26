function Footer() {
	return (
		<footer className='footer'>
			<div className='containerf'>
				© {new Date().getFullYear()} Copyright Text
				<br />
				<a className='footera' href='#!'>
					A.Nyrov
				</a>
			</div>
		</footer>
	);
}

export { Footer };
