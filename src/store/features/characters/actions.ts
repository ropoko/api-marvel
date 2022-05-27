import { action } from 'typesafe-actions';
import { HttpResponse } from '../../../models/httpResponse';
import { Character, CharacterActions } from './types';

export const loadRequest = (name?: string) => action(CharacterActions.LOAD_REQUEST, { name });

export const loadSuccess = (data: HttpResponse<Character[]>) => action(CharacterActions.LOAD_SUCCESS, { data });

export const loadFailure = () => action(CharacterActions.LOAD_FAILURE);
