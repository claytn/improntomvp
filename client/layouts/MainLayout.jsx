import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
import NavBar from './NavBar.jsx';

export const MainLayout = ({content}) => (
  <div>
    <header>
      <NavBar />
    </header>
    <main>
      {content}
    </main>
  </div>
)
