import { action } from 'typesafe-actions';
import { HttpResponse } from '../../../models/httpResponse';
import { Character, CharacterActions } from './types';

export const loadRequest = (name: string, id?: number) => action(CharacterActions.LOAD_REQUEST, { name, id });

export const loadSuccess = (data: HttpResponse<Character>) => action(CharacterActions.LOAD_SUCCESS, { data });

export const loadFailure = () => action(CharacterActions.LOAD_FAILURE);
