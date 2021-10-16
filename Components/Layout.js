import React from 'react';
import CustomHead from './CustomHead';
import Slider from './Home/Slider';
import Footer from './Footer';

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      <CustomHead title={title} description={description} keywords={keywords} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
