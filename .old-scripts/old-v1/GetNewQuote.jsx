//allows useEffect

function F(searchQuotes) {
	let quoteContent = null;
	useEffect(() => {
		let cat = prompt(`What shall you search for?`);
		let apiUrl = 'https://api.quotable.io/' + cat;
		searchQuotes(apiUrl);
		quoteContent = apiUrl;
	}, []);
	return quoteContent;
}
