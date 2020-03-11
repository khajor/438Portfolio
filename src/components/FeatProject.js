import React from 'react';
import Reveal from 'react-reveal/Reveal';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const DataWrap = ({ title, sum, date, url, bgColor }) => (
	<div className="data-wrap">
		<div className="textbox">
			<p className="pro-title">{title}</p>
			<p className="pro-datesum">
				{date}
				<br></br>
				{sum}
			</p>
		</div>

		<AniLink
			cover
			direction="left"
			bg={bgColor}
			to={url}
			duration={1.3}
			className="nav-link"
		>
			Read More
		</AniLink>
	</div>
);

function FeatProject(props) {
	return (
		<div className="feat-pro">
			<div
				style={{ background: props.img ? props.img : props.bgColor }}
				className="bg"
			></div>
			<Reveal effect="fadeIn" effectOut="fadeOut">
				<DataWrap
					title={props.title}
					date={props.date}
					sum={props.sum}
					url={props.url}
					bgColor={props.bgColor}
				/>
			</Reveal>
		</div>
	);
}

export default FeatProject;
