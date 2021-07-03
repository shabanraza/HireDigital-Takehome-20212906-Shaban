import React, { useState, useEffect } from 'react';

function Category({category,filterByCategory}) {
  return (
      <div className='catergory-wrapper'>
        <h3>Filters</h3>
        <ul>
          {category.map((el,index)=>
            <li key={index} onClick={()=>filterByCategory(el)}>
              {el}
            </li>
          
          )}
        </ul>
      </div>
  );
}

export default Category;