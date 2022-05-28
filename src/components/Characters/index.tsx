import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Character } from '../../store/features/characters/types';

import { bindActionCreators, Dispatch } from 'redux';
import * as CharactersActions from '../../store/features/characters/actions';
import { PagedData } from '../../models/httpResponse';

interface DispatchProps {
	loadRequest(name: string): void;
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
		<ul>
			{results.map((char) => (
				<li key={char.id}>{char.name}</li>
			))}
		</ul>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	info: state.characters.info.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
