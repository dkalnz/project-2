//This is the home page
//Link to API:
//const url = `https://api.quotable.io/random`;

import { useState, useEffect } from 'react';
// import { getQuote } from '../fcomps/getQuote';
import DisplayBox from './DisplayBox';

export default function Quotes({ setQuoteList }) {
	const [quote, setQuote] = useState([]);
	// const [allQuotes, setAllQuotes] = useState([props]);
	// useEffect(() => {
	// 	getQuote();
	// }, []);
	// const myQuote = () => {
	// 	getQuote().then(setQuoteList);
	// };

	useEffect(() => {
		apiCall()
			.then((res) => {
				// setQuote(res.json[0])
				let myJson = res.json;
				console.log(myJson);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);
	// } => response.json())
	// .then((response) => {
	// 	// console.log(`fetch log ${response.content}`);
	// 	console.log(response.content, response.author);
	// 	return { text: response.content, author: response.author };
	// })
	// .catch(console.error);
	// 	const url = 'https://api.quotable.io/random';
	// 	//Fetch statement
	// 	fetch(url)
	// 		.then((response) => response.json())
	// 		.then((response) => {
	// 			// console.log(`fetch log ${response.content}`);

	// 			setQuote([response.content, response.author]);
	// 		})
	// 		.catch(console.error);
	// }
	return (
		<div className='quotes-page fade-in-fast'>
			<h3>Quote</h3>
			{/* <DisplayBox quote={quote} /> */}
			<button className='Like'>
				{/* onClick={(e) => {
				 	e.preventDefault();
				 	let myObj = { ...{ text: quote[0], author: quote[1] } };
					// console.log(myObj);
				 	let temp = global;
				 	setGlobal([...setGlobal, { text: myObj.text, author: myObj.author }]);
				 	getQuote();
				 }}> */}
				Like
			</button>
		</div>
	);
}
const url = 'https://api.quotable.io/random';
export const apiCall = async ({ setQuoteList }) => {
	//Fetch statement
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Data could not be fetched!');
	} else {
		return response.json();
	}
};
