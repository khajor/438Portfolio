import React from 'react';
import { Button } from 'antd';

function DataBox({ dbbg, role, context, tools, duration, dbData }) {
	return (
		<div
			className="databox"
			style={{
				backgroundColor: dbbg,
			}}
		>
			<div className="db-section">
				<p className="data-title">ROLE</p>
				<p>{role}</p>
			</div>
			<div className="db-section">
				<p className="data-title">CONTEXT</p>
				<p>{context}</p>
			</div>
			<div className="db-section">
				<p className="data-title">TOOLS</p>
				<p>{tools}</p>
			</div>
			<div className="db-section">
				<p className="data-title">DURATION</p>
				<p>{duration}</p>
			</div>
		</div>
	);
}
export { DataBox };

function OverviewBox({ link, sum }) {
	return (
		<div className="overviewbox">
			<p style={{ fontWeight: '700' }}>OVERVIEW</p>
			<h5>{sum}</h5>
			<div style={{ padding: '1rem', paddingLeft: '0rem' }}>
				<Button href={link}>View Website -></Button>
			</div>
		</div>
	);
}
export { OverviewBox };

function ProjectIntro({ bg, title, tagline, tcolor }) {
	return (
		<div className="projin-wrap">
			<div className="projin-head" style={{ backgroundColor: bg }}>
				<div className="projin-head-text">
					<h2 style={{ color: tcolor}}>{title}</h2>
					<h3>{tagline}</h3>
				</div>
			</div>
			<div className="projin-head-text-m">
				<h2 style={{marginBottom: '.2rem' }}>{title}</h2>
				<h3>{tagline}</h3>
			</div>
		</div>
	);
}
export { ProjectIntro };
