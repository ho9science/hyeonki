module.exports = {
  siteMetadata: {
    title: "개발자",
    name: "민현기",
    date: `June 15, 2022`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
  ],
}
