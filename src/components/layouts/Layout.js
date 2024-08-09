import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; 
import { Analytics } from "@vercel/analytics/react"
const Layout = ({ children }) => {
  return (
    <>

      <Navbar />
      <main>
        {children}
      <Analytics />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
