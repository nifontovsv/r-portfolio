import { combineReducers, createStore } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
	posts: postsReducer,
	usersPage: usersReducer,
	profilePage: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;


