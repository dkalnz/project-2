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
		</div>
	);
}
export default Quotes;
// useEffect(() => {
// 	// declare the async data fetching function
// const fetchData = async () => {
// 		// get the data from the api
// 		const data = await fetch('https://api.quotable.io/random');
// 		// convert the data to json
// 		const json = await response.json();

// 		// set state with the result
// 		setData(json);
// 	};

// 	// call the function
// 	fetchData()
// 		// make sure to catch any error
// 		.catch(console.error);
// }, []);

// const url = `https://api.quotable.io/random`;
