import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { PagedData } from '../../models/httpResponse';
import { ApplicationState } from '../../store';
import * as CharactersActions from '../../store/features/characters/actions';
import { Character } from '../../store/features/characters/types';
import '../../styles/pages/characterDetails.css';

interface DispatchProps {
	loadRequest(name: string, id?: number): void;
}

type Props = {
	info: PagedData<Character>;
} & DispatchProps;

const CharacterDetails: React.FC<Props> = ({ info, loadRequest }) => {
	const { id } = useParams();

	useEffect(() => {
		loadRequest('', Number(id));
	}, []);

	const { results } = info.data;

	return (
		<div className='container'>
			{results.map((char) => (
				<div key={char.id} className='char'>
					<Link className='link-back' to={'/'}>☚ voltar</Link>
					<section className='img'>
						<img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={`${char.name} foto`} />
					</section>
					<section className='char-text'>
						<h1>{char.name}</h1>
						<p>{char.description === '' ? 'Não possui descrição' : char.description}</p>
					</section>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	info: state.characters.info.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
