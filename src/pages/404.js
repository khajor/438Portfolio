import React from 'react';
import { Link } from 'gatsby';

function NotFound() {
	return (
		<div>
			<h1> Woops!</h1>
			<p>Nothing to see here...</p>
			<button>
				<Link to="/">Back to home</Link>
			</button>
		</div>
	);
}
export default NotFound;
