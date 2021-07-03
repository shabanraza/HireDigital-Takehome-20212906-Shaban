import React, { useState, useEffect } from 'react';

function SearchBox({search,searchProduct}) {
  return (
      <div className='search-wrapper'>
        <input  className='search-input' placeholder='search' value={search} onChange={searchProduct}/>
      </div>
  );
}

export default SearchBox;