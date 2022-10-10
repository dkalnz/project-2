//This is the home page
//Link to API
import { UseState, useEffect } from 'react';

export default function Quotes() {
	useEffect(() => {
		// declare the async data fetching function
		const fetchData = async () => {
			// get the data from the api
			const data = await fetch('https://yourapi.com');
			// convert the data to json
			const json = await response.json();

			// set state with the result
			setData(json);
		};

		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);
}

// const url = `https://api.quotable.io/random`;
