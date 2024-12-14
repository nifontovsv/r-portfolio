import React from 'react';
import './App.module.scss';
import Header from './components/Header/Header';
import Container from './components/common/Container/Container'
import { Routes, BrowserRouter, Route } from 'react-router';
import Post from './components/MyPosts/Post';
import MyPostsContainer from './components/MyPosts/MyPostsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Container>
					<Header />
					<Routes>
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/profile' element={<ProfileContainer />} />
					</Routes>
					{/* <MyPostsContainer />
					<Post /> */}
				</Container>
			</div>
		</BrowserRouter>
	);
}

export default App;
