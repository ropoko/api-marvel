import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Character } from '../../store/features/characters/types';

import { bindActionCreators, Dispatch } from 'redux';
import * as CharactersActions from '../../store/features/characters/actions';
import { PagedData } from '../../models/httpResponse';
import Card from '../Card';

import './characters.style.css';
import Loading from '../Loading';

interface DispatchProps {
	loadRequest(name: string, id?: number): void;
}

type Props = {
	info: PagedData<Character>;
	loading: boolean
} & DispatchProps;

const Characters: React.FC<Props> = ({ info, loading, loadRequest }) => {

	useEffect(() => {
		loadRequest('');
	}, []);

	const { results } =  info.data;

	return (
		<div className='characters-list'>
			{loading
				? <Loading />
				:
				<>
					{results.map((char) => (
						<Card key={char.id} char={char} />
					))}
				</>
			}
		</div>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	info: state.characters.info.data,
	loading: state.characters.loading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
