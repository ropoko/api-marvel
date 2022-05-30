import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { PagedData } from '../../models/httpResponse';
import { ApplicationState } from '../../store';
import { Character } from '../../store/features/characters/types';
import * as CharactersActions from '../../store/features/characters/actions';
import './banner.style.css';

interface DispatchProps {
	loadRequest(name: string, id?: number): void;
}

type Props = {
	info: PagedData<Character>;
} & DispatchProps;

const Banner: React.FC<Props> = ({ info, loadRequest }) => {

	useEffect(() => {
		loadRequest('', 1009351);
	}, []);

	const { results } = info.data;

	return (
		<>
			{results.map((char) => (
				<section className='banner' key={char.id}>
					<div className='text'>
						<strong>{char.name}</strong>
						<p>{char.description}</p>
						{/* <a href="#">Saiba mais sobre {char.name} aqui!</a> */}
					</div>
					<img className='banner-img' src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="3-D Man Banner" />
				</section>
			))}
		</>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	info: state.characters.info.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
