import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../store/features/characters/types';
import './card.style.css';

const Card = ({ char }: { char: Character }) => {
	return (
		<div className='card'>
			<header className='card-img'>
				<Link to={`character/${char.id}`}>
					<img className='char-picture' src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name} />
				</Link>
			</header>
			<main className='card-content'>
				<strong> {char.name} </strong>
				<p className='card-description'>{char.description === '' ? 'Não possui descrição' : char.description}</p>
			</main>
		</div>
	);
};

export default Card;
