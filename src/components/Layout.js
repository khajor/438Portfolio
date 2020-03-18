import React from 'react';
import { useState } from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon, Button } from 'antd';
import { Menu, MenuItem } from './Menu.js';
import Logo from '../components/Logo';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

function TopLayout({ title, children }) {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						pages {
							title
							link
						}
					}
				}
			}
		`
	);

	const [visible, toggleVisible] = useState(false);

	return (
		<>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
			</Helmet>

			<header className="header">
				<div className="nav-wrap">
					<AniLink
						cover
						bg="#081538"
						direction="up"
						to="/"
						deuration={1.3}
						className="logo-link"
					>
						<Logo></Logo>
					</AniLink>

					<div className="nav">
						<AniLink 
							cover
							direction="down"
							bg="#081538"
							to="/about"
							duration={1.3}
							className="navlink">PROJECTS</AniLink>

						<AniLink 
							cover
							direction="down"
							bg="#081538"
							to="/about"
							duration={1.3}
							className="navlink">ARTWORK</AniLink>

						<AniLink 
							cover
							direction="down"
							bg="#081538"
							to="/about"
							duration={1.3}
							className="navlink">ABOUT</AniLink>

					</div>
					<div className="sider">
						<div className="nav-button">
							<Button
								type="link"
								onClick={() => toggleVisible(!visible)}
								style={{ marginBottom: 16, zIndex: 120, fontSize: '1.2rem' }}
							>
								<Icon type={visible ? 'close' : 'menu'} />
							</Button>
						</div>

						<Menu
							alignment="right"
							visible={visible}
							menuBackground="#081538"
							width="275px"
						>
							<MenuItem></MenuItem>
							<MenuItem justifyContent="flex-end">
								<Link className="nav-link " to="/projects">
									PROJECTS
								</Link>
							</MenuItem>
							<MenuItem justifyContent="flex-end">
								<Link className="nav-link " to="/projects">
									ARTWORK
								</Link>
							</MenuItem>
							<MenuItem justifyContent="flex-end">
								<AniLink
									cover
									direction="down"
									bg="#081538"
									to="/about"
									duration={1.3}
									className="nav-link"
								>
									ABOUT
								</AniLink>
							</MenuItem>
						</Menu>
					</div>
				</div>
			</header>

			<main>{children}</main>

			<footer className="footer">
				<p>Copyright 2020 Built with &lt;3 in React</p>
			</footer>
		</>
	);
}

export default TopLayout;
