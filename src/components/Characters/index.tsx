import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Character } from '../../store/features/characters/types';

import { bindActionCreators, Dispatch } from 'redux';
import * as CharactersActions from '../../store/features/characters/actions';

interface DispatchProps {
	loadRequest(name?: string): void;
}

type Props = {
	characters: Character[];
} & DispatchProps;

const Characters: React.FC<Props> = (props) => {

	const { data } = props.characters as any;

	useEffect(() => {
		props.loadRequest();
	}, []);

	console.log(data['data']);

	return (
		<ul>
			{/* {props.characters.map((char) => (
				<li key={char.id}>{char.name}</li>
			))} */}
		</ul>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	characters: state.characters.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
