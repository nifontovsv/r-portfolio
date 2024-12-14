import React from 'react';
import Post from './Post';

function MyPosts(props) {
	let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div>
			<h1>My Posts</h1>
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} cols='30' rows='10'></textarea>
			</div>
			<div className=''>
				<button onClick={onAddPost}>Add Post</button>
			</div>
			<div>{postElements}</div>
		</div>
	);
}

export default MyPosts;
