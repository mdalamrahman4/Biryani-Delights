import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; 
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
const Layout = ({ children }) => {
  return (
    <>

      <Navbar />
      <main>
        {children}
      <Analytics />
      <SpeedInsights/>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
