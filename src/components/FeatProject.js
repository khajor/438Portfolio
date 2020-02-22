import React from 'react'
import {Button} from 'antd'
//import { getInputClassName } from 'antd/lib/input/Input';
import Fade from 'react-reveal/Fade';

const featPro = {
	title: '',
	date:'',
    sum:'',
	img:'',
	bgColor:'',
	url:''
}

const DataWrap = ({ title, sum }) => (
	<div className="data-wrap">
		<div className="textbox">
			<p className="pro-title">{title}</p>
			<p className="pro-sum">{sum}</p>
		</div>
		<Button type='default' 
				ghost background='rgba(10,10,10,10.5)' 
				style={{alignSelf:'flex-start', fontSize:'.75rem'}}>
					Learn More
				</Button>
	</div>
);

function FeatProject(props) {
	return (
	<div class="feat-pro">
		<div style={{background: props.img ? props.img : props.bgColor}} className='bg'>	
		</div>
		<Fade>
			<DataWrap title={props.title} sum={props.sum} />
		</Fade>

	</div>
);}

export default FeatProject