import React from 'react'
import {Button} from 'antd'
import { getInputClassName } from 'antd/lib/input/Input';

const featPro = {
	title: '',
	date:'',
    sum:'',
	img:'',
	bgColor:'',
	url:''
}

function FeatProject(props) {
	return (
	<div class="feat-pro">
		<div style={{background: props.img ? props.img : props.bgColor}} className='bg'>	
		</div>
		<div class="data-wrap">
			<div class="textbox">
				<p class='pro-title'>{props.title}</p>
				<p class="pro-sum">{props.sum}</p>
			</div>
			<Button type='default' 
			ghost background='rgba(10,10,10,10.5)' 
			style={{alignSelf:'flex-start', fontSize:'.75rem'}}>
				Learn More
			</Button>
		</div>
	</div>
);}

export default FeatProject