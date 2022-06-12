const path = require(`path`);

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.join(__dirname, `src`, `projects`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `0Adiber.github.io`,
        short_name: `0Adiber`,
        start_url: `/`,
        icon: `src/images/ali.webp`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: `Abyss`,
            },
          },
          `gatsby-remark-images`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
