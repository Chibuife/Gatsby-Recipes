import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import setupTags from '../utils/setupTags'
import slugify from "slugify"
import '../styles/global.css'

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <main className='tagsheight '>
        <section className='grid grid-cols-1 gap-8'>
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return <Link to={`/${text}`} key={index}>
              <div className="bg-gray-500 transition-all hover:bg-primary-500 w-50 capitalize text-center py-6 rounded text-white ">
              <h5>{text}</h5>
              <p>{value} recipe</p>
              </div>
            </Link>
          })}
        </section>
      </main>
    </Layout>
  )
}

export default Tags
export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`