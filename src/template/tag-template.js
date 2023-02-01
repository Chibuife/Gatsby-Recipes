import { graphql } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import RecipesList from "../components/RecipiesList"
import '../styles/global.css'

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <div className='vh90'>
          <h2 className='capitalize'>{pageContext.tag}</h2>       
          <div >
          <RecipesList recipes={recipes} />
        </div>
      </div>
    </Layout> 
  )
}

export const query = graphql`
query GetRecipesByTag($tag: String) {
  allContentfulRecipe(filter: {content: {tags: {eq: $tag}}}, sort: {title: ASC}) {
    nodes {
      title
      id
      cookTime
      perpTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, width: 400)
      }
    }
  }
}
`
export default TagTemplate