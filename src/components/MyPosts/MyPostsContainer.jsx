import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/postsReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		posts: state.posts,
		newPostText: state.newPostText,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateNewPostText: text => {
			dispatch(updateNewPostTextActionCreator(text));
		},
		addPost: () => {
			dispatch(addPostActionCreator());
		},
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
