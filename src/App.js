import React from 'react';
import './App.module.scss';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

function App() {
	return (
		<div className='App'>
			<Container>
				<Header />
			</Container>
		</div>
	);
}

export default App;
