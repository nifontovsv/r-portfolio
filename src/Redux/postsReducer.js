const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi', likesCount: 0 },
		{ id: 2, message: 'Hello', likesCount: 0 },
		{ id: 3, message: 'Hey', likesCount: 0 },
	],

	newPostText: 'Hi!',
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText,
			};
		}
		default:
			return state;
	}
};

export let addPostActionCreator = () => ({ type: ADD_POST });

export let updateNewPostTextActionCreator = text => {
	return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default postsReducer;
