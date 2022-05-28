import React from 'react';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Characters from './components/Characters';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import store from './store';
import './styles/global.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Sidebar />
					<Routes>
						<Route path="/char" element={<Characters />}></Route>
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
