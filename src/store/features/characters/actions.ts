import { action } from 'typesafe-actions';
import { Character, CharacterActions } from './types';

export const loadRequest = () => action(CharacterActions.LOAD_REQUEST);

export const loadSuccess = (data: Character[]) => action(CharacterActions.LOAD_SUCCESS, data);

export const loadFailure = () => action(CharacterActions.LOAD_FAILURE);
