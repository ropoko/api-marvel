import { Saga } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import { load } from './characters/sagas';
import { CharacterActions } from './characters/types';

export default function* rootSaga(): any {
	return yield all([
		takeLatest(CharacterActions.LOAD_REQUEST, load)
	]);
}
