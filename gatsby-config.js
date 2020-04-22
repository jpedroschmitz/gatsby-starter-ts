require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.REACT_APP_GOOGLE_ANALYTICS_ID,
      },
    },
  ],
};
