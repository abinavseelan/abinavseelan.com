module.exports = {
  siteMetadata: {
    title: 'Abinav Seelan | UI Engineer, Flipkart.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'open sans\:400,700'
        ]
      }
    }
  ],
}