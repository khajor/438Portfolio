import React from 'react'
import {Button} from 'antd'
//import { getInputClassName } from 'antd/lib/input/Input';
import Reveal from 'react-reveal/Reveal'
import {Link} from 'gatsby'


const DataWrap = ({ title, sum, date, url}) => (
	<div className="data-wrap">
		<div className="textbox">
			<p className="pro-title">{title}</p>
			<p className="pro-datesum">{date}<br></br>{sum}</p>
		</div>

		<Link style={{alignSelf:'flex-start', fontSize:'.75rem', color:'white'}} to={url}>
			Read More
		</Link>

	</div>
);

function FeatProject(props) {
	return (
	<div class="feat-pro">
		<div style={{background: props.img ? props.img : props.bgColor}} className='bg'>	
		</div>
		<Reveal effect="fadeIn" effectOut="fadeOut">
			<DataWrap title={props.title}  date={props.date} sum={props.sum} url={props.url}/>
		</Reveal>

	</div>
);}

export default FeatProject