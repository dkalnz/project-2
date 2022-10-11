//This is the home page
//Link to API

import { useState, useEffect } from 'react';
import DisplayBox from './DisplayBox';

function Quotes() {
	const [quote, setQuote] = useState([]);
	useEffect(() => {
		getQuote();
	}, []);
	function getQuote() {
		const url = 'https://api.quotable.io/random';
		//Fetch statement
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				// console.log(`fetch log ${response.content}`);

				setQuote([response.content, response.author]);
			})
			.catch(console.error);
	}

	return (
		<div className='quotes-page fade-in-fast'>
			<h3>Quotes Page</h3>
			<DisplayBox quote={quote} />
			<button class='Like'>Like</button>
		</div>
	);
}
export default Quotes;

// const url = `https://api.quotable.io/random`;
