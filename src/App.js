//App Object
import { useEffect } from 'react';
function App() {
	//-----Fetch-----
	// API REFERENCE - https://github.com/lukePeavey/quotable/blob/master/README.md#api-reference-

	let urlCat = 'random';
	const url = `https://api.quotable.io/${urlCat}`;
	const searchQuotes = async (title) => {
		const response = await fetch(url);
		//GET /random
		const data = await response.json();
		console.log(data); //JSON results
	};

	//-----Search function-----
	useEffect(() => {
		searchQuotes('urlCat');
	}, []);

	//-----RETURN-----
	return <div className='App'></div>;
}
export default App;
