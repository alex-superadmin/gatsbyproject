const path = require('path');
const slash = require('slash');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const PageTemplate = path.resolve("./src/templates/page.js")

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    
	const Pages = result.data.allWordpressPage.edges
      Pages.forEach(page => {
        createPage({
          path: `/${page.node.slug}`,
          component: PageTemplate,
          context: {
            id: page.node.wordpress_id,
          },
        })
      })
    })
  }
