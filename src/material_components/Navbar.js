import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
	const [value, setValue] = useState(0);
	const ref = useRef < HTMLDivElement > null;
	//const [messages, setMessages] = React.useState(() => refreshMessages());

	// React.useEffect(() => {
	// 	ref.current.ownerDocument.body.scrollTop = 0;
	// 	setMessages(refreshMessages());
	// }, [value, setMessages]);

	return (
		<Box sx={{ pb: 7 }} ref={ref}>
			<CssBaseline />
			<Paper
				sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
				elevation={3}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}>
					<BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
					<BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
					<BottomNavigationAction label='Archive' icon={<ArchiveIcon />} />
				</BottomNavigation>
			</Paper>
		</Box>
	);
}
