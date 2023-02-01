import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const query = graphql`
 {
     allFile(filter: {extension: {ne: "svg"}}) {
    nodes {
      name
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          width: 200
          height:200
        )
      }
    }
  }
}
`
const Gallary = () => {
    const data = useStaticQuery(query)
    const nodes = data.allFile.nodes
    console.log(data)
    return (
        <div>
            {nodes.map((image, index) => {
                const {name} = image;
                console.log(image.childrenImageSharp)
                const pathToImage = getImage(image)
                return (
                    <article key={index} >
                        <GatsbyImage image={pathToImage}/>
                        <p>{name}</p>
                    </article>
                )
            })}
        </div>
    )
}

export default Gallary