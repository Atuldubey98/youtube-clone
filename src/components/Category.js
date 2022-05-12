import React from 'react'
import './Category.css'
const Category = ({categoryName}) => {
  return (
    <div className='category'>{categoryName}</div>
  )
}

export default Category