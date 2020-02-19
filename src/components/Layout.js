import React from 'react';
import {useState} from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Menu, Icon, Button, Layout } from 'antd';

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


	const [collapsed, toggleCollapsed] = useState(true)

	const {Sider} = Layout

	const sidemenu = (
		<div className="sidemenu">
			<div>
			<Button type="link"  
			className='navbutton' 
			onClick={()=>toggleCollapsed(!collapsed)} 
			style={{ marginBottom: 16, position:'absolute', right:0, zIndex:2, fontSize:'1.2rem'}}>
				<Icon type={collapsed ? 'menu' : 'close'} style={{color:'rgb(233, 240, 255)'}}/>
			</Button>	
			</div>

			<Sider
			// width={150}
			collapsable={true} 
			collapsedWidth={0}
			defaultCollapsed={true} 
			collapsed={collapsed}
			style={{position:'absolute', right: 0, height:'100vh', transitionDuration: '1s', background:'rgb(16, 15, 62)'}}	
			>

			<Menu
			mode="vertical"
			style={{background: 'rgb(16, 15, 62)', color:'#fff', paddingTop: 30, borderRight:'none', width: '100%'}} >

				{data.site.siteMetadata.pages.map((page,index) => {
				return <Menu.Item key={index} style={{
					position: 'relative',
					width: '100%',
					background: 'coral',
					padding: '0',
				}}>
					{/* Hello */}
					<a href={page.link} style={{
						textAlign:'right',
						display: 'block',
						position: 'absolute',
						width: '100%',
						height: '100%',
						background: "cornflowerblue",
					}}>{page.title}</a>
					</Menu.Item>}
				)}
			</Menu>
			</Sider>
		</div>
	)

	return (
		<>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
			</Helmet>

			<header className="header">
				<div className='sider'>
					{sidemenu}
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
