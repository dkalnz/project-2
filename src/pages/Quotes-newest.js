import React, { useState, useEffect } from 'react';
import DisplayBox from './DisplayBox';
const url = 'https://api.quotable.io/random';

const Quotes = ({ props }) => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [quote, setQuote] = useState([]);

	function getQuote() {
		let text;
		let author;
		//Fetch statement
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				text = response.content;
				author = response.author;
				return { text: text, author: author };
			})
			.catch(console.error);
	}

	const fetchQuote = fetch(url)
		.then((response) => response.json())
		.then((res) => {
			return [res.content, res.author];
		});

	const actualQuote = () => {
		fetchQuote.then((data) => {
			console.log(data);
			return data;
		});
	};

	return (
		<div className='quotes-page fade-in-fast'>
			<h3>Quote</h3>
			<DisplayBox quote={quote} />
			<button
				className='Like'
				onClick={(e) => {
					e.preventDefault();
					let myObj = { ...{ text: quote[0], author: quote[1] } };
					// console.log(myObj);
					let temp = global;
					setGlobal([...setGlobal, { text: myObj.text, author: myObj.author }]);
					actualQuote();
				}}>
				Like
			</button>
		</div>
	);
};

export default Quotes;

// 	setQuote = async () => {
// 		let response = await fetch(url);
// 		let object = await response.json();
// 		return [(object.content, object.author)];
// 	};
// };

// fetch(url).then((res) => res.json()).then((res) => console.log(`fetch log ${response}`), dataObj=res.content;)
// 	.catch(console.error);

// props.setQuoteState = JSON.stringify(response.content)
// 			setQuote([response.content, response.author]);

// .then((res) => res.json())
// .then(
// 	(data) => {
// 		setIsLoaded(true);
// 		// setQuoteState(data);
// 	},
// 	(error) => {
// 		setIsLoaded(true);
// 		setError(error);
// 	}
// );
// 	if (error) {
// 		return <div>Error: {error.message}</div>;
// 	} else if (!isLoaded) {
// 		return <div>Loading...</div>;
// 	} else {
// 		return (
// 			<ul>
// 				{quoteState.map((q) => (
// 					<li key={q.id}>{`${q.content} --${q.author}`}</li>
// 				))}
// 			</ul>
// 		);
// 	}
// };
