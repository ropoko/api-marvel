import { createStore, Store } from 'redux';
import { CharacterState } from './features/characters/types';
import rootReducer from './features/rootReducer';

export interface ApplicationState {
    characters: CharacterState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
