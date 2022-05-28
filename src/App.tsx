import React from 'react';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import store from './store/index';
import './styles/global.css';

import Home from './pages/Home';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Sidebar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						{/* <Route path="/details" element={<Details />}></Route>
						<Route path="/stars" element={<Stars />}></Route> */}
					</Routes>
				</Router>
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
