import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
