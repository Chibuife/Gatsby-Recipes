import React from 'react'
import Layout from "../components/Layout"
import { graphql, Link } from 'gatsby'
import RecipiesList from '../components/RecipiesList'

const contact = ({data}) => {
    const recipes = data.allContentfulRecipe.nodes
    return (
        <Layout>
            <main>
                <section>
                    <article>
                        <h3>Want To Get In Touch?</h3>
                        <p>
                            Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.
                        </p>
                        <p>
                            Cardigan prism bicycle rights put a bird on it deep v.
                        </p>
                        <p>
                            Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.
                        </p>
                    </article>
                    <article>
                        <form>
                            <div>
                                <label htmlFor="name">your name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div>
                                <label htmlFor="email">your email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="email">message</label>
                                <textarea name="message" id="message" ></textarea>
                            </div>
                            <button type="submit">submit</button>
                        </form>
                    </article>
                </section>
                <section>
                    <h5>Look at this Aweomsouce!</h5>
                    <RecipiesList recipes={recipes} />
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
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        perpTime
      }
      totalCount
    }
  }
`
export default contact