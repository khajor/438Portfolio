import React from 'react';
import {useState} from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon, Button, Layout } from 'antd';
import {Menu, MenuItem} from './Menu.js';
import Logo from '../components/Logo'

function TopLayout({title, children }) {
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

	const [visible, toggleVisible] = useState(false)

	return (
		<>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
			</Helmet>

			<header className="header">
				<Link to="/" className="logo-link">
					<Logo></Logo>
				</Link>
				<div className='sider'>
					<div className='nav-button'>
						<Button type="link"  
							onClick={()=>toggleVisible(!visible)} 
							style={{ marginBottom: 16, zIndex:120, fontSize:'1.2rem'}}>
								<Icon type={visible ? 'close' : 'menu'}/>
						</Button>	
					</div>

					<Menu alignment="right" visible={visible} menuBackground='rgb(16, 15, 62)' width='275px'> 
						<MenuItem></MenuItem>
						<MenuItem justifyContent="flex-end">
							<Link className='nav-link 'to="/projects">Projects</Link>
						</MenuItem>
						<MenuItem justifyContent="flex-end">
							<Link className='nav-link 'to="/projects">Artwork</Link>
						</MenuItem>
						<MenuItem justifyContent="flex-end">
							<Link className='nav-link' to="/about">About</Link>
						</MenuItem>
						<MenuItem justifyContent="flex-end">
							<Link className='nav-link' to="/contact">Contact</Link>
						</MenuItem>
					</Menu>
				</div>
			</header>

			<main>
				{children}
			</main>

			<footer className="footer">
				<p>Copyright 2020 Built with &lt;3 in React</p>
			</footer>
		</>
	);
}

export default TopLayout;
