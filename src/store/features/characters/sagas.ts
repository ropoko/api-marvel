import { call, put } from 'redux-saga/effects';
import routes from '../../../routes';
import api from '../../../services/api';

import { loadFailure, loadSuccess } from './actions';

export function* load(name?: string): any {
	try {
		const response = yield call(api.get, routes(name ?? '').characters);
		yield put(loadSuccess(response));
	} catch (err) {
		yield put(loadFailure());
	}
}
