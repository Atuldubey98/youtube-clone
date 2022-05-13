import React, { useState } from 'react'
import './Categories.css'
import Category from './Category'
const Categories = () => {
    const [catScroll , setCatScroll] = useState(0);
    const categoryNames = [
        "All",
        "Web Series",
        "Comedies",
        "Linux",
        "Conversation",
        "Real Madrid CF",
        "Sports League",
        "Computer Science",
        "Lionel Messi",
        "Music",
        "Games",
        "Real Madrid CF",
        "Sports League",
        "Computer Science",
        "Lionel Messi",
        "Music",
        "Games",
    ]
    const scrollCategoryList = (scroll) => {
        document.getElementById('categories').scrollLeft += scroll;
        setCatScroll(document.getElementById('categories').scrollLeft);
    }
    return (
        <div className='categories'>
            <button onClick={() => scrollCategoryList(-200)} className={catScroll > 0 ? ' category-btn' : 'shadow category-btn'}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div id='categories' className="category-list">
                {
                    categoryNames.map((categoryName, i) => <Category key={i} categoryName={categoryName} />)
                }
            </div>
            <button onClick={() => scrollCategoryList(200)} className={catScroll === 0  ? 'category-btn' : 'shadow category-btn'}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Categories