import React from 'react';
import { Provider } from 'react-redux';
import Characters from './components/Characters';
import Footer from './components/Footer';
import Header from './components/Header';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<div className="App">
				<Characters />
			</div>
			<Footer />
		</Provider>
	);
}

export default App;
