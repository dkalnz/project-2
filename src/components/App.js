//App Object
import { useState, setState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Quotes from './Quotes';
import Gallery from './Gallery';
import Breathe from './Breathe';
import { Route, Routes } from 'react-router-dom';
function App() {
	return (
		<>
			<Navbar />
			<Gallery />
			<Quotes />
			<Breathe />
		</>
	);
}
export default App;
