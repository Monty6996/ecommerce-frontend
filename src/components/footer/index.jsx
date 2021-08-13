import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faGithub,
	faInstagram,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	const icons = [faFacebook, faTwitter, faGithub, faInstagram];
	const links = [
		'https://facebook.com/',
		'https://twitter.com/',
		'https://github.com/Monty6996',
		'https://instagram.com/',
	];

	return (
		<footer className='footer'>
			{/* Footer Top  */}
			<div className='footer-top section pt-4'>
				<div className='container'>
					<div className='row text-center text-md-start'>
						<div className=' col-md-4 col-12 mb-2 mb-md-0'>
							{/* <!-- Single Widget --> */}
							<div className='single-footer links'>
								<h4>Informacion</h4>
								<ul className='p-0 ps-md-4'>
									<li>
										<a href='#'>Sobre Nosotros</a>
									</li>
									<li>
										<a href='#'>Contacto</a>
									</li>
									<li>
										<a href='#'>Ayuda</a>
									</li>
								</ul>
							</div>
							{/* <!-- End Single Widget --> */}
						</div>
						<div className=' col-md-4 col-12  mb-2 mb-md-0'>
							{/* <!-- Single Widget --> */}
							<div className='single-footer links'>
								<h4>Informacion Util</h4>
								<ul className='p-0 ps-md-4'>
									<li>
										<a href='#'>Devoluciones</a>
									</li>
									<li>
										<a href='#'>Envios</a>
									</li>
								</ul>
							</div>
							{/* <!-- End Single Widget --> */}
						</div>
						<div className=' col-md-4 col-12 mb-2 mb-md-0'>
							{/* <!-- Single Widget --> */}
							<div className='single-footer social'>
								<h4>Atencion al Cliente</h4>
								{/* <!-- Single Widget --> */}
								<div className='contact'>
									<ul className='p-0 ps-md-4'>
										<li className='user-select-all'>
											<span className='me-2'>
												<FontAwesomeIcon
													icon={faEnvelope}
													size='lg'
												/>
											</span>
											manuelmontanana57@gmail.com
										</li>
										<li className='user-select-all'>
											<span className='me-2'>
												<FontAwesomeIcon
													icon={faWhatsapp}
													size='lg'
												/>
											</span>
											+5493517897277
										</li>
										<li>Lun. a Vie. de 9 a 20h.</li>
									</ul>
								</div>
								{/* <!-- End Single Widget --> */}
								<ul className='p-0 ps-md-4'>
									{icons.map((icon, index) => (
										<li key={index}>
											<a href={links[index]}>
												<FontAwesomeIcon
													icon={icon}
													size='lg'
												/>
											</a>
										</li>
									))}
								</ul>
							</div>
							{/* <!-- End Single Widget --> */}
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Footer Top --> */}
			<div className='copyright'>
				<div className='container'>
					<div className='inner'>
						<div className='row'>
							<div className='col-lg-6 col-12 text-center text-md-start'>
								<div className='left'>
									<p>
										Copyright © 2021 - All Rights Reserved.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
