import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import RecipiesList from '../components/RecipiesList'

const About = ({data :{allContentfulRecipe:{nodes:recipes}}}) => {
  return (
    <Layout>
      <main>
        <section className='grid grid-cols-1'>
          <article className="w-full">
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>
            <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
            <Link to='/contact'>
              contact
            </Link>
          </article>
          <StaticImage className="w-full h-96" src='../images/about.jpeg' alt='Person Pouring Salt in Bowl' placeholder='blurred'  />
        </section>
        <section>
          <h5 className='text-center my-10'>Look at this Aweomsouce!</h5>
          <RecipiesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED )
        }
        perpTime
      }
      totalCount
    }
  }
`

export default About