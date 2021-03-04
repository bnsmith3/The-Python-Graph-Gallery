/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  // siteMetadata added here can now be used anywhere in the website thanks to a graphQL query
  siteMetadata: {
    title: "The Python Graph Gallery",
    description: "A gallery of charts made with Python",
  },
  plugins: [
    { // this must be loaded first in order to work
      resolve: `gatsby-plugin-gtag`, // note this instead of gatsby-plugin-react-helmet
      options: {
        trackingId: "UA-79254642-2",
        head: true, // note this is TRUE and not FALSE as listed in other examples above
        anonymize: true
      }
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notebooks`,
        path: `${__dirname}/src/notebooks`,
        ignore: [`**/.ipynb_checkpoints`],
      },
    },
    {
      resolve: `@rafaelquintanilha/gatsby-transformer-ipynb`,
      options: {
        notebookProps: {
          displayOrder: ["image/png", "text/html", "text/plain"],
          showPrompt: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Python Graph Gallery`,
        short_name: `Python Graph Gallery`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#69b3a2`,
        display: `standalone`,
        icon: `static/logo/Home_single_big.png`
      },
    },
  ],
};
