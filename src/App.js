//App Object
import { useEffect } from 'react';
function App() {
	//-----Fetch-----
	// API REFERENCE - https://github.com/lukePeavey/quotable/blob/master/README.md#api-reference-
	let currentQuote = null;
	let quoteString = null;
	let urlCat = 'random';
	const url = `https://api.quotable.io/${urlCat}`;
	const searchQuotes = async (title) => {
		const response = await fetch(url);
		//GET /random
		const data = await response.json();
		console.log(data); // <-------JSON results
		//puts the JSON data into an object
		currentQuote = {
			text: data.content,
			author: data.author,
		};
		//converts object key/value to a single string
		quoteString = `${currentQuote.text}  --${currentQuote.author}`;
		console.log(quoteString);
	};

	// -----Search function-----
	useEffect(() => {
		searchQuotes(urlCat);
	}, []);

	//-----RETURN-----
	return (
		<div className='App'>
			<div className='quote' id='quoteText'>
				{currentQuote.text}
			</div>
			<div className='quote' id='quoteAuthor'>
				` --${currentQuote.author}`
			</div>
		</div>
	);
}
export default App;
