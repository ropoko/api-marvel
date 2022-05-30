import React from 'react';
import '../../styles/pages/home.css';
import Banner from '../../components/Banner';
import Characters from '../../components/Characters';

const Home = () => {
	return (
		<div className='container'>
			<Banner />
			<Characters />
		</div>
	);
};

export default Home;
