require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Digit House`,
    author: `Digit House`,
    about: `ကုမ္ပဏီ ၏ နည်းပညာ အသစ်များ ၊ လေ့လာနေသော နည်းပညာ များ ၊ အတွေ အကြုံ ၊ မှတ်စု ၊ 
    ကျနော်တို့ ဖြတ်သန်းခဲ့သမျှ အခက် အခဲ  တို့ ကို  ခြေရာ အဖြစ် မှတ်တမ်းတင် ရန် ရည်ရွယ်သည်။ 
    We learn, We share from our experience.`,
    description: `Digit House Blog`,
    siteUrl: `https://storyhub-agency-tarex.redq.now.sh/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },

          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
          {
            resolve: `gatsby-remark-reading-time`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `StoryHub - Agency Blog`,
        short_name: `StoryHub`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-lodash`,
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us20.list-manage.com/subscribe/post?u=cb3a5523ebea13c583c060982&amp;id=6a3976825b",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        // username: ,
        // access_token: ,
        // instagram_id: ,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Padauk`,
            variants: [`400`, `700`],
          },
          {
            family: `Noto Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
}
