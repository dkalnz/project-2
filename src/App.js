//App Object
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './fcomps/Navbar';
import Quotes from './pages/Quotes';
import Gallery from './pages/Gallery';
import Breathe from './pages/Breathe';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [quoteList, setQuoteList] = useState([
		//{ text: 'text1', author: 'author1' },
	]);
	return (
		<>
			<Navbar {...quoteList} />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Quotes />} />
					<Route path='/Quotes' element={<Quotes />} />
					<Route path='/Gallery' element={<Gallery />} />
					<Route path='/Breathe' element={<Breathe />} />
				</Routes>
			</div>
		</>
	);
}
export default App;
