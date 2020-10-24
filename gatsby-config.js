require("dotenv").config({
  path: `.env`,
});
module.exports = {
  siteMetadata: {
    title: `Luis Cortes - Web Developer`,
    description: `Luisccode Portfolio, Web Developer who specializes in JavaScript technologies.`,
    author: `@luisccode`,
    image: `/images/homePage.png`,
    siteUrl: `https://luisccode.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.luisccode.com",
        sitemap: "https://www.luisccode.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        queryLimit: 1000,
        contentTypes: ["sections", "services", "projects", "articles"],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `600`, `700`],
          },
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luisccode Portfolio`,
        short_name: `Luisccode Portfolio`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/male-technologist.png`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ff4900`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
