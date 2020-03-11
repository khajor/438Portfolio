import React from 'react'
import Layout from '../components/Layout';
import {ProjectIntro, DataBox} from '../components/ProjIntro';

const mmData = {
	title: 'Market Mate',
	tagline: 'enhancing customer education',
	bg: '#2CAB7D',
	dbbg: '#E9F8DD',
	link: 'https://khajor.wixsite.com/marketmate',
	dbData: [ 'designer', 'course project', 'figma', '10 weeks'],
	sum: 'This is the summary of the project. Just a quick explanation or overview of what the project was about, and why it happened/mattered Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas voluptate inventore vel necessitatibus excepturi voluptas officia? Tempore minus delectus beatae distinctio accusamus quisquam soluta pariatur necessitatibus magnam minima libero.'
}

function MarketMate() {
	return (
	<Layout>
		<div className="mm-wrap">
			<ProjectIntro bg={mmData.bg} link={mmData.link} title={mmData.title} tagline={mmData.tagline} sum={mmData.sum}>
			</ProjectIntro>
			<DataBox dbbg={mmData.dbbg} role='designer' context='course project' tools='Figma, Adobe Illustrator' duration='10 weeks'/>
		</div>
	</Layout>
)}

export default MarketMate