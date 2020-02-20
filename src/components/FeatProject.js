import React from 'react'
import {Button} from 'antd'

const featPro = {
	title: '',
	date:'',
    sum:'',
	img:'',
	bgColor:'',
}

function FeatProject(props) {
	return (
	<div class="feat-pro" style={{background: props.img ? props.img : props.bgColor }}>
		<div class="textbox">
	 		<p class='pro-title'>{props.title}</p>
	    	<p>{props.sum}</p>
		</div>
		<Button type='default' ghost background='rgba(10,10,10,10.5)'>Learn More</Button>
	</div>
);}

export default FeatProject