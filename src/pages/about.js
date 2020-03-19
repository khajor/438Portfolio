import React from 'react';
import Layout from '../components/Layout';
import AboutDraw from '../components/Aboutdraw';
import { Button } from 'antd';

function HomePage() {
	return (
		<Layout title="About page">
			<div className="about-page-wrap">
				<div className="about-sec">
					<div className="about-intro">
						<div className="about-image">
							<AboutDraw/>
						</div>
						<div className="abt-intro-txt">
							<h2 className="about-name intro-name">
								I&apos;m a <span>UX Designer</span> and <span>Artist</span>{' '}
								based in Seattle <span>.</span>
							</h2>
							<h3>
								I&apos;m a 5th year student at the University of Washington
								studying Human Centered Design &#38; Engineering  and Drawing
								and Painting. I am interested in how humans interact with
								technology and work towards making them more accessible and
								sustainable. I am drawn to understanding the human experience as
								technologies continue to evolve and shape the world around us.
								<br></br> <br></br>
								My artistic practice allows me to explore these topics. Drawing
								a connection between traditional art and HCDE, provides me with
								new ideas and a unique perspective. I hope to find a career that
								allows me to practice art, graphic design and engineering.
							</h3>
						</div>
						<Button
							type="ghost"
							style={{
								maxWidth: '130px',
								color: 'white',
								marginTop: '1rem',
								alignSelf: 'center',
							}}
						>
							Resume
						</Button>
					</div>
				</div>
				{/* <div className="about-sec"></div> */}
			</div>
		</Layout>
	);
}

export default HomePage;
