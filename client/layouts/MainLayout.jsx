import React from 'react';
import NavBar from './NavBar.jsx';

export const MainLayout = ({content}) => (
  <div>
    <header>
      <NavBar />
    </header>
    {content}
  </div>
)
