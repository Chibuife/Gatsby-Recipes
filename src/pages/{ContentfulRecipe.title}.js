import { graphql, Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from '../components/Layout'

const RecipeTemplate = ({ data }) => {
    const { title, cookTime, content, prepTime, serving, description: { description }, image, } = data.contentfulRecipe
    const pathToImage = getImage(image)
    const { tags, instructions, ingredients, tools } = content
    console.log(data)
    return (
        <Layout>
            <main>
                <div>
                    {/* hero */}
                    <section>
                        <GatsbyImage image={pathToImage} alt={title} />
                        <article>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            {/* icons */}
                            <div>
                                <article>
                                    <BsClock />
                                    <h5>prep time</h5>
                                    <p>{prepTime} min.</p>
                                </article>
                                <article>
                                    <BsClockHistory />
                                    <h5>cook time</h5>
                                    <p>{cookTime} min.</p>
                                </article>
                                <article>
                                    <BsPeople />
                                    <h5>Serving</h5>
                                    <p>{serving}</p>
                                </article>
                            </div>
                            {/* tags */}
                            <p>
                                Tags : {tags.map((tag, index) => {
                                    return <Link to={`/${tag}`} key={index}>
                                        {tag}
                                    </Link>
                                })}
                            </p>
                        </article>
                    </section>
                    {/* rest of th content  */}
                    <section>
                        <article>
                            <h4>Instructions</h4>
                            {
                                instructions.map((item, index) => {
                                    return <div key={index}>
                                        <header>
                                            <p>step {index + 1}</p>
                                            <div></div>
                                        </header>
                                        <p>{item}</p>
                                    </div>
                                })
                            }
                        </article>
                        <article>
                            <div>
                                <h4>ingredients</h4>
                                {
                                    ingredients.map((item, index) => {
                                        return (
                                            <p key={index}>
                                                {item}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <h4>tools</h4>
                                {
                                    tools.map((item, index) => {
                                        return (
                                            <p key={index}>
                                                {item}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </Layout>
    )
}
export const query = graphql`
query getSingleRecipe($title: String) {
  contentfulRecipe(title: {eq: $title}) {
    title
    cookTime
    content {
      ingredients
      tags
      tools
      instructions
    }
    description {
      description
    }
    perpTime
    serving
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
  }
}`

export default RecipeTemplate