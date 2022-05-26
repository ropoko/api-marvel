import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Character } from '../../store/features/characters/types';

interface Props {
    characters: Character[];
}

const Characters: React.FC<Props> = ({ characters }) => {
	return (
		<ul>
			{characters.map((char) => (
				<li key={char.id}>{char.id} - {char.name}</li>
			))}
		</ul>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	characters: state.characters.data
});

export default connect(mapStateToProps)(Characters);
