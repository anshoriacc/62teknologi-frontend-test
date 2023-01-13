import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="w-screen max-w-3xl mx-auto">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}

export default Layout;
