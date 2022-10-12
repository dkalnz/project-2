import React from 'react';
import { useEffect } from 'react';

export default function Timer() {
	const [counter, setCounter] = React.useState(60);

	useEffect(() => {
		counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
	}, [counter]);

	return (
		<div className='App'>
			<div>Countdown: {counter}</div>
		</div>
	);
}
