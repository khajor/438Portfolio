import React from 'react';
import { Link } from 'gatsby';
import {Button} from 'antd';
import PDrop from '../components/PDrop'

function NotFound() {
	return (
		<div className='fourbody'>
			<h1 className="woops"> Woops!</h1>
			<p>Nothing to see here...</p>
			<Button type="default">
				<Link to="/">Back to home</Link>
			</Button>
			<div className="pic"><PDrop></PDrop></div>
		</div>
	
	);
}
export default NotFound;
