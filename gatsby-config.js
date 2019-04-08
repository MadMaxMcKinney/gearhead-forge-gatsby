module.exports = {
    siteMetadata: {
        title: `Gearhead Forge`,
        description: `We are a group of enthusiasts passionately keeping the flame of V8’s and hot rodding alive by building uniquely aggressive cars and forging a lifestyle.`,
        author: `Gearhead Forge`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        'gatsby-plugin-styled-components',
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gearhead-forge`,
                short_name: `gearhead-forge`,
                start_url: `/`,
                background_color: `#1e1e1e`,
                theme_color: `#ffc107`,
                display: `minimal-ui`,
                icon: `src/images/gearhead-favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-youtube-v2`,
            options: {
                channelId: 'UCsP9zJIz13RyxYgBW1-M-zw',
                apiKey: 'AIzaSyDou3FmfZosXU8d7raQ4gx2NyW8qaUj4k0',
                maxVideos: 3, // Defaults to 50
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
