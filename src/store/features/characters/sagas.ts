import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { HttpResponse } from '../../../models/httpResponse';
import routes from '../../../routes';
import api from '../../../services/api';

import { loadFailure, loadSuccess } from './actions';
import { Character } from './types';

export function* load(name?: AnyAction) {
	try {
		const response: HttpResponse<Character> = yield call(api.get, routes(name?.payload ?? '').characters);
		yield put(loadSuccess(response));
	} catch (err) {
		yield put(loadFailure());
	}
}
