import React from 'react';
import Layout from '../components/Layout';
import FeatProject from '../components/FeatProject';

const featured=[
    {title: 'Market Mate',
	date:'Winter 2019',
    sum:'nkqwefnkenkdf fnkwenwelgme',
	img:'',
	bgColor:'rgb(116,233,181)'},

    {title: 'Project Two',
	date:'Sring 2018',
    sum:'nrkwern qlmwe',
	img:'',
	bgColor:'rgb(237, 83, 63)'},

	{title: 'Project 3',
	date:'2019',
    sum:'nwfek fnwkkfewkmfw',
	img:'',
	bgColor:'rgb(116,151,233)'}
]

const featGrid = featured.map((f,i) => (
		<div className="feat-pro-wrap">
		<FeatProject {...f} key={i}/>
		</div>
		))

function HomePage() {
	return (
		<Layout title="Home page">
			<div className="section intro">
				<div className="intro-wrap">
					<div className="intro-name">
						<p>I<span>'</span>m Khadijah Jordan and I love to <span>create</span> </p>
					</div>
					<div className="intro-img">

					</div>
				</div>
			</div>

			<div className="section feat-pro-grid">
                {featGrid}
			</div>

			<div className="section other-pro-grid">

			</div>
		</Layout>
	)
}

export default HomePage;
