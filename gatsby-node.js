exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions

  return new Promise(resolve => {
    // if the page component is the index page component
    if (page.componentPath === `${__dirname}/src/pages/company/index.js`) {
      deletePage(page)

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: '/',
      })
    }
    resolve()
  })
}

const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
query GetRecipes {
  allContentfulRecipe {
    nodes {
      content {
        tags
      }
    }
  }
}
`)

result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      createPage({
        path: `/${tag}`,
        component: path.resolve(`src/template/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}