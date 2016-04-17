import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <h2>impronto</h2>
      <nav>
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/">How It Works</a>
        <a href="/support">Support</a>
        <AccountsUI />
      </nav>
    </header>
    <main>
      {content}
    </main>
  </div>
)
