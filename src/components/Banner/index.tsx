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
		// loadRequest('', 1009351);
	}, []);

	const { results } = info.data;

	return (
		<>
			{/* {results.map((char) => (
				<section className='banner' key={char.id}>
					<div className='text'>
						<strong>{char.name}</strong>
						<p>{char.description}</p>
					</div>
					<img className='banner-img' src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={`${char.name} banner`} />
				</section>
			))} */}
			<section className='banner'>
				<div className='text'>
					<strong>A-Bomb (HAS)</strong>
					<p>Rick Jones has been Hulk`s best bud since day one, but now he`s more than a friend...he`s a teammate! Transformed by a Gamma energy explosion, A-Bomb`s thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!</p>
				</div>
				<img className='banner-img' src="http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg" alt="A-Bomb (HAS)" />
			</section>
		</>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	info: state.characters.info.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
