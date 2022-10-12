function getData() {
	useEffect(() => {
		fetch('https://futdb.app/api/players?page=1?limit=3')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);
}
return response.json;
