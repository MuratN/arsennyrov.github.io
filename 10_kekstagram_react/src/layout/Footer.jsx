import logo from "../img/ha-logo.png";

function Footer() {
	return (
		<footer className='footer'>
			<div className='center-wrapper'>
				<section className='footer-logo'>
					Сделано в{" "}
					<a
						tabindex='1'
						href='http://htmlacademy.ru'
						className='footer-logo-link'
					>
						<img
							src={logo}
							alt='logotip'
							className='footer-logo-image'
							width='130'
						/>
						HTML Academy
					</a>{" "}
					&copy; 2017
				</section>
				<nav className='footer-social'>
					<a
						tabindex='1'
						href='https://twitter.com/htmlacademy_ru'
						alt='twitter'
						className='footer-social-item footer-social-item-twitter'
						target='_blank'
						rel='nofollow noreferrer'
					>
						Twitter
					</a>
					<a
						tabindex='1'
						href='https://www.instagram.com/htmlacademy/'
						alt='instagram'
						className='footer-social-item footer-social-item-instagram'
						target='_blank'
						rel='nofollow noreferrer'
					>
						Instagtam
					</a>
					<a
						tabindex='1'
						href='https://www.facebook.com/htmlacademy'
						alt='facebook'
						className='footer-social-item footer-social-item-facebook'
						target='_blank'
						rel='nofollow noreferrer'
					>
						Facebook
					</a>
					<a
						tabindex='1'
						href='https://vk.com/htmlacademy'
						alt='vk'
						className='footer-social-item footer-social-item-vk'
						target='_blank'
						rel='nofollow noreferrer'
					>
						VK
					</a>
				</nav>
			</div>
		</footer>
	);
}

export { Footer };
