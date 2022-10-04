//App Object
import { F } from './GetNewQuote';

const newQuote = (
	<form className='searchBar'>
		<input type='text' placeholder='Category Search' />
		<button type='submit'>Riddle Me That</button>
	</form>
);

function App() {
	//-----Fetch-----
	// API REFERENCE - https://github.com/lukePeavey/quotable/blob/master/README.md#api-reference-
	StartSearch();

	//-----Search function-----
	//--See-hook-docs: https://reactjs.org/docs/hooks-effect.htmlhttps://reactjs.org/docs/hooks-effect.html
	let quoteContent = F(searchQuotes);

	//-----RETURN-----
	return (
		<div className='App'>
			{newQuote}
			<p id='quote'>{quoteContent}</p>
		</div>
	);
}
export default App;
