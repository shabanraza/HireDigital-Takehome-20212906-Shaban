import React, { useState, useEffect } from 'react';

function FilterBox({option,shortProduct}) {
  console.log("option",option)
  return (
      <div className='filter-wrapper'>
        <label for="short">Short by:</label>
        <select id="short" value={option} onChange={shortProduct}>
          <option value="L2h">Price Low to High</option>
          <option value="h2l">Price high to low</option>
        </select>
      </div>
  );
}

export default FilterBox;