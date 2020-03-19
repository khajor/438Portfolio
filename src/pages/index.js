import React from 'react';
import Layout from '../components/Layout';
import FeatProject from '../components/FeatProject';
import PDrop from '../components/PDrop'


const featured=[
    {title: 'Market Mate',
	date:'Winter 2019',
    sum:'Lorem ipsum filler lorem ipsum d solor fill text about a project fill summary',
	img:'',
	bgColor:'#74e9b5',
	url:'/mm'
	},

    {title: 'Essence',
	date:'Fall 2018',
    sum:'Lorem ipsum filler lorem solor fill text about a project fill sum dolor Lor Lor Loreming',
	img:'',
	bgColor:'#7497e9',
	url:'/es'
	},

	{title: 'Cashflow',
	date:'Fall 2019',
    sum:'Lor lor emipsum. Dolor filler text project fill IpLoreem ipsum abouto a project at some point',
	img:'',
	bgColor:'#3c8fb5',
	url:'/cf'
	}
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
					<div>
						<h2 className="intro-name">I'm Khadijah Jordan and I love to <span>create</span> </h2>
					</div>
				</div>
				<PDrop/>
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
