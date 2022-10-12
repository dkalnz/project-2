import Timer from '../fcomps/Timer';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate, redirect } from 'react-router-dom';

export default function Breathe() {
	const [counter, setCounter] = useState(60);
	useEffect(() => {
		counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
	}, [counter]);

	if (counter > 2) {
		return (
			<>
				<div className='breathe-page fade-in-fast'>
					<h3>Breathe</h3>
					<button className='big-round fade-in-med'>One Minute</button>
					<Timer />
				</div>
			</>
		);
	} else {
		return redirect('/Quotes');
	}
}

const Inside = () => {
	const [buttonText, setButtonText] = useState('one minute');
	<div
		className='fade-in'
		onClick={() => {
			setTimeout(() => {
				setButtonText('OneMinute');
			}, 60000);
		}}>
		{buttonText}
	</div>;
};
