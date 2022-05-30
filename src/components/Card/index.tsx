import React from 'react';
import { Character } from '../../store/features/characters/types';
import './card.style.css';

const Card = ({ char }: { char: Character }) => {
	return (
		<div className='card'>
			<header className='card-img'>
				<img className='char-picture' src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name} />
			</header>
			<main className='card-content'>
				<strong> {char.name} </strong>
				<p className='card-description'>{char.description === '' ? 'Não possui descrição' : char.description}</p>
			</main>
		</div>
	);
};

export default Card;
