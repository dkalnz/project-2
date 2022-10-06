//This is the home page
// function todaysQuote() {
// 	const url = `https://api.quotable.io/tags`;
// 	const searchQuotes = async (url) => {
// 		const response = await fetch(url);
// 		//GET /random
// 		const myQuote = await response.json();
// 		console.log(myQuote); //JSON results
// 		return myQuote;
// 	};
// }

export default function Quotes() {
	return (
		<>
			<div className='quotes-page'>MAIN Quotes Page</div>
		</>
	);
}
