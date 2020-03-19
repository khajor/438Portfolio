import React from 'react';
import Layout from '../components/Layout';
import { ProjectIntro, DataBox, OverviewBox } from '../components/ProjIntro';

const esData = {
	title: 'Essence',
	tagline: 'personalize your mental healing',
	bg: '#A7CFFF',
	dbbg: '#DBF6FF',
	link: 'https://hcde-310-final-project-223101.appspot.com/',
	dbData: ['programmer, designer', 'course project', 'Python, HTML, CSS', '2 weeks'],
	sum:
		'This is the summary of the project. Just a quick explanation or overview of what the project was about, and why it happened/mattered Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas voluptate inventore vel necessitatibus excepturi voluptas officia? Tempore minus delectus beatae distinctio accusamus quisquam soluta pariatur necessitatibus magnam minima libero.',
	tcolor: '#273155',
};

function MarketMate() {
	//to ensure page loads from the top:
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
	return (
		<Layout>
			<div className="page-outer-wrap">
				<ProjectIntro
					bg={esData.bg}
					title={esData.title}
					tagline={esData.tagline}
					tcolor={esData.tcolor}
				/>
				<div className="es-wrap">
					<OverviewBox sum={esData.sum} link={esData.link} />
					<DataBox
						dbbg={esData.dbbg}
						role="designer"
						context="course project"
						tools="Figma, Adobe Illustrator"
						duration="10 weeks"
					/>
				</div>
				<div className="proj-sec-wrap">
					<div className="es-sec proj-sec sec1">
						<div className="proj-sec-data">
							<h1>Relax your mind</h1>
							<h3>
								Winter farmer’s market vendors expressed{' '}
								<span>
									difficulty in communicating information about their business
									to their customers.
								</span>{' '}
								Vendors have little time throughout the busy market day to find
								moments to provide the in-depth information their customers
								deserve. While customers can often misunderstand choices that
								vendors make such as use of plastic packaging or higher process
								for organic foods.
							</h3>
						</div>
					</div>
					<div className="es-sec proj-sec essec2">
						<div className="proj-sec-data">
							<h1>Our vision</h1>
							<h3>
								Our team addressed these issues by developing a platform to{' '}
								<span>
									mediate the information communication between vendors and
									customers. Market mate is simple to use, engaging and
									educational.
								</span>{' '}
								Vendors can easily personalize the information they want to share
								while being flexible allowing for customer interaction at any
								vendors set up.
							</h3>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default MarketMate;
