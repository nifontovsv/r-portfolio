import React from 'react';

function Post(props) {
	let styles = {
		img: {
			width: 80,
		},
		post: {
			display: 'flex',
		},
	};
	return (
		<div id={props.id} style={styles.post}>
			<img style={styles.img} src='https://shapka-youtube.ru/wp-content/uploads/2024/08/avatarka-ananasa.jpg' alt='' />
			<p>{props.message}</p>
			<p>{props.likesCount}</p>
		</div>
	);
}

export default Post;
