import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar(props) {
	const [allQuotes, setAllQuotes] = useState([props]);
	console.log(`Navbar log: ${props}`);
	return (
		<nav className='site-title'>
			<ul>
				<CustomLink to='/Gallery' props={allQuotes}>
					<span className='material-symbols-outlined'>imagesmode</span>
				</CustomLink>
				<CustomLink to='/Quotes' props={allQuotes}>
					<span className='material-symbols-outlined'>format_quote</span>
				</CustomLink>
				<CustomLink to='/Breathe'>
					<span className='material-symbols-outlined'>blur_circular</span>
				</CustomLink>
			</ul>
		</nav>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? 'active' : ''}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}
