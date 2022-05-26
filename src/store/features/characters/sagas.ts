import { call, put } from 'redux-saga/effects';
import routes from '../../../routes';
import api from '../../../services/api';

import { loadFailure, loadSuccess } from './actions';

export function* load(): any {
	try {
		const response = yield call(api.get, routes('wong').characters);
		console.log('response', response);

		yield put(loadSuccess(response));
	} catch (err) {
		yield put(loadFailure());
	}
}
