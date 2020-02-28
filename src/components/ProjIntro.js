import React from 'react'
import {Button} from 'antd'

function DataBox ({dbbg, role, context, tools, duration, dbData}) {
	return <div>
		<div className='databox' style={{backgroundColor: dbbg, padding:'1rem'}}>
			<div>
				<p className='data-title'>ROLE</p>
				<p>{role}</p>
			</div>
			<div>
				<p className='data-title'>CONTEXT</p>
				<p>{context}</p>
			</div>
			<div>
				<p className='data-title'>TOOLS</p>
				<p>{tools}</p>
			</div>
			<div>
				<p className='data-title'>DURATION</p>
				<p>{duration}</p>
			</div>
		</div>
	</div>
}

export {DataBox}

function ProjectIntro({bg, title, tagline, tcolor, link, sum}){
	return <div className='intro-wrap'> 
		<div style={{height:'29rem'}}> 
			<div style={{height:'42%', backgroundColor:bg}}>
			</div>
			<div style={{padding:'1rem'}}>
				<h2 style={{color:tcolor, marginBottom:'.2rem'}}>{title}</h2>
				<h3>{tagline}</h3>
			</div>
		</div>

		<div style={{padding:'1rem'}}>
			<p style={{fontWeight:'700'}}>OVERVIEW</p>
			<h4>{sum}</h4>
			<div style={{padding:'1rem', paddingLeft:'0rem'}}>
				<Button href={link}>View Website -></Button>	
			</div>
		</div>
	</div>
}

export {ProjectIntro}