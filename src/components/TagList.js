import React from 'react'
import setupTags from '../utils/setupTags'
import { Link } from 'gatsby'
import '../styles/global.css'

const TagList = ({ recipes }) => {
  const newTags = setupTags(recipes)

  return (
    <div className=' w-full'>
      <h4 className='capitalize mt-10 mb-10'>recipes</h4>
      <div className='text-xl md:grid-cols-1 md:gap-0  grid-cols-3 grid capitalize gap-8'>
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return <Link className="md:mb-3 col-end-auto "to={`/${text}`} key={index}>{text} ({value})</Link>
        })}
      </div>
    </div>
  )
}

export default TagList