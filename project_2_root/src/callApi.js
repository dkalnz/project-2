import { callApi } from './';

function callApi() {
	let urlCat;
	const url = `https://api.quotable.io/${urlCat}`;
	const searchQuotes = async (title) => {
		const response = await fetch(url);
		//GET /random
		const myQuote = await response.json();
		console.log(myQuote); //JSON results
		return myQuote;
	};
}
export default callApi();
