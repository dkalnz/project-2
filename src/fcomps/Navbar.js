import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='site-title'>
			<ul>
				<CustomLink to='/Gallery'>
					<span className='material-symbols-outlined'>imagesmode</span>
				</CustomLink>
				<CustomLink to='/Quotes'>
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
