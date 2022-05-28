import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<ul className='menu'>
			<li className='menu-item'>
				<Link to={''}>
					<p>Personagens</p>
					<img src="/arrow_right.png" alt="arrow" />
				</Link>
			</li>
			<li className='menu-item'>
				<Link to={''}>
					<p>Quadrinhos</p>
					<img src="/arrow_right.png" alt="arrow" />
				</Link>
			</li>
			<li className='menu-item'>
				<Link to={''}>
					<p>Séries</p>
					<img src="/arrow_right.png" alt="arrow" />
				</Link>
			</li>
			<li className='menu-item'>
				<Link to={''}>
					<p>Histórias</p>
					<img src="/arrow_right.png" alt="arrow" />
				</Link>
			</li>
		</ul>
	);
};

export default Navigation;
