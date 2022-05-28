import React from 'react';
import Navigation from '../Navigation';
import './sidebar.style.css';

const Sidebar = () => {
	return (
		<aside className='sidebar'>
			<header>
				<img className='logo' src="/marvel_logo.webp" alt="Logo Marvel" />
				<h2>API Marvel</h2>
			</header>
			<main>
				<Navigation />
			</main>
			<footer>
				<em>Desenvolvido por Rodrigo ♡</em>
			</footer>
		</aside>
	);
};

export default Sidebar;
