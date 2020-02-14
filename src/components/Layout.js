import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql, Link } from 'gatsby';

function Layout({ title, children }) {
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

	const navLinks = data.site.siteMetadata.pages.map((page, index) => {
		return <Link key={index} to={page.link}>{page.title}</Link>;
	})

	return (
		<>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
			</Helmet>

			<header className="header">
				<div> logo </div>
				<nav className="header-nav"> {navLinks} </nav>
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

export default Layout;
