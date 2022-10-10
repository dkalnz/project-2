//This is the home page
//Link to API
import { UseState, useEffect } from 'react';

export default function Quotes() {
	// return (
	// 	<>
	// 		<h2>Quote of the Day</h2>
	// 		<p>This is the Quotes Page</p>
	// 	</>
	// );
	useEffect(() => {
  // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
    const data = await fetch('https://yourapi.com');
    // convert data to json
    const json = await data.json();
    return json;
  }

  // call the function
  const result = fetchData()
    // make sure to catch any error
    .catch(console.error);;

  // ❌ don't do this, it won't work as you expect!
  setData(result);
}, [])random
	};
}
