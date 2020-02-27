module.exports = {
	siteMetadata: {
		pages: [
			{
				title: 'About Me',
				link: '/about',
			},
			{
				title: 'Contact',
				link: '/contact',
			},
		],
	},
    plugins: [
        'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
			fonts: [
					`lato\:300,300i,400,400i,700`,
					`source sans pro\:300,400,400i,700` // you can also specify font weights and styles
			],
				// display: 'swap'
			}
		}
    ],
};
