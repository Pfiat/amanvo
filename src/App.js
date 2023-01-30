import React from 'react';
import Header from './Header';
import { inject } from '@vercel/analytics';

inject();

function HomePage() {
  return (
    <div>
      <Header />
      {<h1>HOMEEE PAGE</h1>}
    </div>
  );
}

export default HomePage;
