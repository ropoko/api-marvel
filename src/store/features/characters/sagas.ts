import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { HttpResponse } from '../../../models/httpResponse';
import routes from '../../../routes';
import api from '../../../services/api';

import { loadFailure, loadSuccess } from './actions';
import { Character } from './types';

export function* load(action: AnyAction) {
	try {
		let response: HttpResponse<Character>;

		const { payload } = action;

		if (payload.id !== undefined)
			response = yield call(api.get, routes('', payload.id).charactersId);
		else
			response = yield call(api.get, routes(payload.name ?? '').characters);

		yield put(loadSuccess(response));
	} catch (err) {
		yield put(loadFailure());
	}
}
