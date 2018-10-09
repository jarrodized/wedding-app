module.exports = {
  siteMetadata: {
    title: 'Adrienne & Jarrod\'s Wedding',
    author: 'Jarrod Rougeau'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-netlify`,
  ],
}