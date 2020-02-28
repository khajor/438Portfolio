import React from 'react';
import Layout from '../components/Layout';
import FeatProject from '../components/FeatProject';
import PDrop from '../components/PDrop'


const featured=[
    {title: 'Market Mate',
	date:'Winter 2019',
    sum:'nkqwefnkenkdf fnkwenwelgme jsut a few words about why wee here ',
	img:'',
	bgColor:'rgb(116,233,181)',
	url:'/mm'
	},

    {title: 'Essence',
	date:'Sring 2018',
    sum:'nrkwern qlmwe today is quite sunny ow beautiful I really love it ',
	img:'',
	bgColor:'rgb(116, 151, 233)',
	url:'/mm'
	},

	{title: 'Cashflow',
	date:'2019',
    sum:'nwfek fnwkkfewkmfw and then we went to the beach and touched the stones',
	img:'',
	bgColor:'rgb(60,143,181)',
	url:'/mm'
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
						<h2 className="intro-name">I<span>'</span>m Khadijah Jordan and I love to <span>create</span> </h2>
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
