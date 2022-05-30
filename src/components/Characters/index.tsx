import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Character } from '../../store/features/characters/types';

import { bindActionCreators, Dispatch } from 'redux';
import * as CharactersActions from '../../store/features/characters/actions';
import { PagedData } from '../../models/httpResponse';
import Card from '../Card';

import './characters.style.css';

interface DispatchProps {
	loadRequest(name: string, id?: number): void;
}

type Props = {
	info: PagedData<Character>;
} & DispatchProps;

const Characters: React.FC<Props> = ({ info, loadRequest }) => {

	useEffect(() => {
		loadRequest('');
	}, []);

	const { results } =  info.data;

	return (
		<div className='characters-list'>
			{results.map((char) => (
				<Card key={char.id} char={char} />
			))}
		</div>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	info: state.characters.info.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
