import React from 'react';
import {useState} from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon, Button, Layout } from 'antd';
import {Menu, MenuItem} from './Menu.js';
import Logo from '../components/Logo'

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


	const [visible, toggleVisible] = useState(false)

	const {Sider} = Layout

	// const sidemenu = (
	// 	<div className="sidemenu">

	// 		<Sider
	// 		// width={150}
	// 		collapsable={true} 
	// 		collapsedWidth={0}
	// 		defaultCollapsed={true} 
	// 		collapsed={collapsed}
	// 		style={{position:'absolute', right: 0, height:'100vh', transitionDuration: '1s', background:'rgb(16, 15, 62)'}}	
	// 		>

	// 		<Menu
	// 		mode="vertical"
	// 		style={{background: 'rgb(16, 15, 62)', color:'#fff', paddingTop: 30, borderRight:'none', width: '100%'}} >

	// 			{data.site.siteMetadata.pages.map((page,index) => {
	// 			return <Menu.Item key={index} style={{
	// 				position: 'relative',
	// 				width: '100%',
	// 				background: 'coral',
	// 				padding: '0',
	// 			}}>
	// 				{/* Hello */}
	// 				<a href={page.link} style={{
	// 					textAlign:'right',
	// 					display: 'block',
	// 					position: 'absolute',
	// 					width: '100%',
	// 					height: '100%',
	// 					background: "cornflowerblue",
	// 				}}>{page.title}</a>
	// 				</Menu.Item>}
	// 			)}
	// 		</Menu>
	// 		</Sider>
	// 	</div>
	// )

	return (
		<>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
			</Helmet>

			<header className="header">
				<Link  to='/' className='logo-link'>
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

					{ console.log(visible)}

					<Menu alignment="right" visible={visible} menuBackground='rgb(16, 15, 62)' width='40vw'> 
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
