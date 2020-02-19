import React from 'react';
import { Link } from 'gatsby';
import {Button} from 'antd';

function NotFound() {
	return (
		<div>
			<h1> Woops!</h1>
			<p>Nothing to see here...</p>
			<Button type="default">
				<Link to="/">Back to home</Link>
			</Button>
		</div>
	);
}
export default NotFound;
