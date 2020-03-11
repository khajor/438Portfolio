import React from 'react';
import Layout from '../components/Layout';
import Wave from '../components/Wave';

function HomePage() {
	return (
		<Layout title="About page">
			<div className="about-intro">
				<div>
					<div>
						<h2 className="intro-name"><span>UX Designer</span> and <span>artist</span> based in Seattle <span>.</span></h2>
					</div>
				</div>
				<Wave></Wave>
			</div>
			<div className="top"></div>
		</Layout>
	);
}

export default HomePage;
