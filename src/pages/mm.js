import React from 'react';
import Layout from '../components/Layout';
import { ProjectIntro, DataBox, OverviewBox } from '../components/ProjIntro';

const mmData = {
	title: 'Market Mate',
	tagline: 'enhancing customer education',
	bg: '#2CAB7D',
	dbbg: '#E9F8DD',
	link: 'https://khajor.wixsite.com/marketmate',
	dbData: ['designer', 'course project', 'figma', '10 weeks'],
	sum:
		'This is the summary of the project. Just a quick explanation or overview of what the project was about, and why it happened/mattered Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas voluptate inventore vel necessitatibus excepturi voluptas officia? Tempore minus delectus beatae distinctio accusamus quisquam soluta pariatur necessitatibus magnam minima libero.',
	tcolor: 'white',
};

function MarketMate() {
	//to ensure page loads from the top:
	// document.documentElement.scrollTop = 0;
	// document.body.scrollTop = 0;
	return (
		<Layout>
			<div className="page-outer-wrap">
				<ProjectIntro
					bg={mmData.bg}
					title={mmData.title}
					tagline={mmData.tagline}
					tcolor={mmData.tcolor}
				/>
				<div className="mm-wrap">
					<OverviewBox sum={mmData.sum} link={mmData.link} />
					<DataBox
						dbbg={mmData.dbbg}
						role="designer"
						context="course project"
						tools="Figma, Adobe Illustrator"
						duration="10 weeks"
					/>
				</div>
				<div className="proj-sec-wrap">
					<div className="mm-sec proj-sec mmsec1">
						<div className="proj-sec-data">
							<h1>At the market</h1>
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
					<div className="mm-sec proj-sec mmsec2">
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
					<div className="mm-sec proj-sec mmsec3">
						<div className="proj-sec-data">
							<h1>The process</h1>
							<div className="prcs-time">
								<div className="prcs-time-card">
									<h3>RESEARCH</h3>
									<div className="prcs-time-card-bar"></div>
									<p>We began with our research phase, consisting of several 
										interviews, competitive analyses, personas, and a user 
										journey map.</p>
								</div>
								<div className="prcs-time-card">
									<h3>IDEATION</h3>
									<div className="prcs-time-card-bar"></div>
									<p>We then developed design requirements to guide the creation of storyboards, information architecture, and interface designs.</p>
								</div>
								<div className="prcs-time-card">
									<h3>PROTOTYPING &#38; EVALUATION</h3>
									<div className="prcs-time-card-bar"></div>
									<p>Next, we implemented and evaluated our designs, iterating upon our paper prototypes, wireframes, and high-fidelity mock-ups.</p>
								</div>
								

							</div>
							
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default MarketMate;
