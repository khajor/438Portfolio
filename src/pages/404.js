import React from 'react';
import { Link } from 'gatsby';
import {Button} from 'antd';
import PDrop from '../components/PDrop'

function NotFound() {
	return (
		<div className='fourbody'>
			<div className="fourwrap">
			<h1 className="woops"> Woops!</h1>
			<p>There&apos;s nothing to here...</p>
			<Button type="ghost" style={{maxWidth:'150px', color:'white'}}>
				<Link to="/">Back to home</Link>
			</Button>
			</div>
			<div className="pic"><PDrop></PDrop></div>
		</div>
	
	);
}
export default NotFound;
