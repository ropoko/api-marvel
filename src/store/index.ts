import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { CharacterState } from './features/characters/types';

import rootReducer from './features/rootReducer';
import rootSaga from './features/rootSaga';

export interface ApplicationState {
	characters: CharacterState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
