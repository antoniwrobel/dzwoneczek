require("dotenv").config({
  path: `.env`,
})

const { default: config } = require("gatsby-plugin-config")

module.exports = {
  siteMetadata: {
    title: "Dzwoneczek",
    description: "Dzwoneczek - przedszkole terapeutyczne",
    url: "https://www.dzwoneczek.pl",
    image: "./src/images/logo-dzwoneczek.png",
    siteUrl: "https://dzwoneczek.pl",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        args: `?onload=onloadCallback&render=explicit`,
      },
    },
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
        name: `main`,
        path: `${__dirname}/src/images/main`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ourValues`,
        path: `${__dirname}/src/images/ourValues`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutUs`,
        path: `${__dirname}/src/images/aboutUs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: config.DATO_API_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -90,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Saira Semi Condensed:900,600,400", "Acme"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Saira Semi Condensed",
              variants: ["400", "600", "900"],
              subsets: ["latin"],
              text: "Hello",
              fontDisplay: "swap",
            },
            {
              family: "Titillium Web",
              variants: ["400", "600", "900"],
              subsets: ["latin"],
              text: "Hello",
            },
            {
              family: "Luckiest Guy",
              text: "Hello",
              fontDisplay: "swap",
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
  ],
}
