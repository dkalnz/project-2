import { React } from 'react';
import { Caller } from 'Caller.js';
import { useEffect, useState } from 'react';

// const url = `https://futdb.app/api/players?page=1?limit=3`;
const [posts, setPosts] = useState([]);

function App() {
	return (
		<div className='App'>
			<p id='quote'>
				<Caller />
			</p>
		</div>
	);
}
export default App;
