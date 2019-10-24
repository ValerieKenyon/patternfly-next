const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'PatternFly 4 - HTML',
  },
  pathPrefix: '/patternfly-next',
  plugins: [
    // Use our patternfly.org theme
    {
      resolve: `gatsby-theme-patternfly-org`,
      options: {
        context: 'core', // For global items that need sideNav
        sideNav: {
          core: [
            { section: 'overview' },
            { section: 'components' },
            { section: 'layouts' },
            { section: 'utilities' },
            { section: 'demos' },
            { section: 'experimental' },
          ]
        },
        topNavItems: [
          {
            text: 'Accessibility',
            path: '/accessibility-guide'
          },
          {
            text: 'Contribute',
            path: '/contribution'
          },
          {
            text: 'Guidelines',
            path: '/guidelines'
          },
          {
            text: 'Modifiers',
            path: '/modifiers'
          },
          {
            text: 'Upgrade guide',
            path: '/upgrade-guide'
          },
          {
            text: 'Icons',
            path: '/icons'
          }
        ]
      }
    },
    // Source component documentation
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs and determines sideNav items
        path: `${path.resolve(__dirname)}/src/patternfly`
      }
    },
    // Source release notes
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs and determines sideNav items
        path: `${path.resolve(__dirname)}/RELEASE-NOTES.md`
      }
    },
    // Source static pages
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages-core', // This determines sideNav context
        path: `${path.resolve(__dirname)}/src/site/pages`
      }
    },
    // Pipe MDX files through this plugin that spits out React components
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      }
    }
  ]
};
