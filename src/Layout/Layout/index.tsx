import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <hr />
      <section className="min-h-[calc(100vh-72px)]">{children}</section>
      <hr />
      <Footer />
    </>
  );
}

export default Layout;
