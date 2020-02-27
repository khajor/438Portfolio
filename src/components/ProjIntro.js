import React from 'react'
import {Button} from 'antd'

function DataBox ({dbbg, role, context, tools, duration, dbData}) {
	return <div>
		<div style={{backgroundColor: dbbg, padding:'1rem'}}>
			<div>
				<p>ROLE</p>
				<p>{role}</p>
			</div>
			<div>
				<p>CONTEXT</p>
				<p>{context}</p>
			</div>
			<div>
				<p>TOOLS</p>
				<p>{tools}</p>
			</div>
			<div>
				<p>DURATION</p>
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
				<p style={{fontSize:'3rem', color:tcolor, marginBottom:'.2rem'}}>{title}</p>
				<p style={{fontSize:'1.6rem'}}>{tagline}</p>
			</div>
		</div>
		<div style={{padding:'1rem'}}>
			<p>OVERVIEW</p>
			{sum}
			<div style={{padding:'1rem', paddingLeft:'0rem'}}>
				<Button href={link}>View Website -></Button>	
			</div>
		</div>
	</div>
}

export {ProjectIntro}