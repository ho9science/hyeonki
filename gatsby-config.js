module.exports = {
  siteMetadata: {
    title: "개발자 민현기",
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
  ],
}
