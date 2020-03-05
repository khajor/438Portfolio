import React from 'react';
import Layout from '../components/Layout';

function HomePage() {
	return (
		<Layout title="About page">
			<div className="section intro">
				<div className="intro-wrap">
					<div>
						<h2 className="intro-name"><span>UX Designer</span> and <span>artist</span> based in Seattle <span>.</span></h2>
					</div>
				</div>
			</div>
			<div className="top"></div>
		</Layout>
	);
}

export default HomePage;
