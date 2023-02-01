import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'
const RecipiesList = ({ recipes = [] }) => {
    return (
        <div className='grid gap-8 grid-cols-1 w-full   mt-10'>
            {
                recipes.map((recipe) => {
                    const { id, title, image, perpTime, cookTime } = recipe;
                    const slug = slugify(title, { lower: true })
                    const pathToImage = getImage(image)
                    return <Link key={id} to={`/${slug}`} className="rounded-md h-60 ">
                        <GatsbyImage className='h-4/5 rounded-md' image={pathToImage} alt={title} />
                        <h5>{title}</h5>
                        <p>Prep: {perpTime} | Cook : {cookTime}min</p>
                    </Link>
                })
            }
        </div>
    )
}

export default RecipiesList