//This is the home page
//Link to API:
//const url = `https://api.quotable.io/random`;

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
		let myArr = [];
		fetch(url)
			.then((response) => response.json())
			.then((response) => setQuote([response.content, response.author]))

			.catch(console.error);
	}

	return (
		<div className='quotes-page fade-in-fast'>
			<h3>Quote</h3>
			<DisplayBox quote={quote} />
			<button
				className='Like'
				id='main'
				onClick={(e) => {
					e.preventDefault();
					// let myObj = [...quote, { text: quote[0], author: quote[1] }];
					let temp = quote;
					// console.log(myObj);
					// setQuote([...temp, { text: myObj.text, author: myObj.author }]);
					// props.setQuoteList = quote;
					getQuote();
				}}>
				<span className='material-symbols-outlined' id='reroll'>
					autorenew
				</span>
			</button>
		</div>
	);
}
export default Quotes;
