import React from 'react'
import RecipiesList from './RecipiesList'
import TagList from './TagList'
import { graphql, useStaticQuery } from 'gatsby'
const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}) {
      nodes {
        id
        title
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        perpTime
      }
    }
  }
`
const AllRecipies = () => {
    const data = useStaticQuery(query)
    // console.log(data)
    const recipes = data.allContentfulRecipe.nodes
  return (
    <section className='grid grid-cols-2'>
      <TagList recipes={recipes}/>
      <RecipiesList recipes={recipes}/>
    </section>
  )
}

export default AllRecipies