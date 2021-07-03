import React, { useState, useContext, useEffect } from 'react';
import Header from './../Header'
function Layout({ children }) {
  return (
    <main>
      <div className='layout-container'>
        <Header />
        {children}
      </div>
    </main>
  );
}

export default Layout;