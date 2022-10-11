const DisplayBox = ({ quote }) => {
	// return early if there are no images
	// if (!quoteContent.length) {
	// 	return <h2>No Quote Found!</h2>;
	// }

	return (
		<div className='box'>
			<div className='content'>
				<p>{quote}</p>
			</div>
		</div>
	);
};
export default DisplayBox;
