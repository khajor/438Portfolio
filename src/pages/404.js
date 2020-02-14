import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

function NotFound() {
	return (
		<div>
			<h1> Woops</h1>
			<p>There is nothing here!</p>
			<button>Back to home</button>
		</div>
	);
}
export default NotFound;
