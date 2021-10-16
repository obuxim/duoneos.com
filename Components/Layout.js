import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content='Zubair Hasan' />
        <meta copyright='Duoneos' />
        <title>{title} | Duoneos - Next generation web development company.</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link rel='stylesheet' type='text/css' href='/css/styles.css' />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
