import React from 'react';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams
} from 'react-router-dom';
import store from './store/index';
import './styles/global.css';

import Home from './pages/Home';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CharacterDetails from './pages/CharacterDetails';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Sidebar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/character/:id" element={<CharacterDetails />}></Route>
					</Routes>
				</Router>
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
