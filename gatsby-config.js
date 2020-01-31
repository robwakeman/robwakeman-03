module.exports = {
  pathPrefix: `/robwakeman-03`,
  siteMetadata: {
    title: `Rob Wakeman`,
    description: `Front-end developer`,
    author: `Rob Wakeman`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import "variables";@import "mixins";`,
        includePaths: [`${__dirname}/src/styles`],
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `robwakeman-03`,
        short_name: `RobWakeman`,
        start_url: `/`,
        background_color: `#847261`,
        theme_color: `#fff952`,
        display: `minimal-ui`,
        icon: `src/images/rw-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            variants: [`400`, `600`, `700`, `900`],
          },
        ],
        fontDisplay: `swap`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
