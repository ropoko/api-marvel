import { Reducer } from 'redux';
import { CharacterActions, CharacterState } from './types';

const INITIAL_STATE: CharacterState = {
	data: [
		{ id: 1, name: 'hulk' },
		{ id: 2, name: 'she-hulk' }
	],
	error: false,
	loading: false
};

const reducer: Reducer<CharacterState> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case CharacterActions.LOAD_REQUEST:
		return { ...state, loading: true };
	case CharacterActions.LOAD_SUCCESS:
		return { ...state, loading: false, error: false, data: action.payload.data };
	case CharacterActions.LOAD_FAILURE:
		return { ...state, loading: false, error: true, data: [] };

	default:
		return state;
	}
};

export default reducer;
