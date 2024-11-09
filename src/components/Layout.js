// Layout.js
import React from 'react';
import Heading from './Heading';
import { Outlet } from 'react-router-dom';  

const Layout = () => {
  return (
    <div className="App">
      <Heading />
      <div className="content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;
