const url = 'https://api.quotable.io/random';

	export default function ApiCall = async () {
		//Fetch statement
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Data could not be fetched!');
		} else {
			return response.json();
		}
	};