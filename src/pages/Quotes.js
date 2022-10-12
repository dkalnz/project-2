//This is the home page
//Link to API:
//const url = `https://api.quotable.io/random`;

import { useState, useEffect } from 'react';
import DisplayBox from './DisplayBox';

function Quotes(props) {
	const [quote, setQuote] = useState([]);
	const [allQuotes, setAllQuotes] = useState([props]);
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
			<h3>Quote</h3>
			<DisplayBox quote={quote} />
			<button
				className='Like'
				onClick={(e) => {
					e.preventDefault();
					let myObj = { ...{ text: quote[0], author: quote[1] } };
					console.log(myObj);
					setAllQuotes([
						...allQuotes,
						{ text: myObj.text, author: myObj.author },
					]);
					getQuote();
				}}>
				Like
			</button>
		</div>
	);
}
export default Quotes;
