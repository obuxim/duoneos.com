import { React, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/images/logo.png';
import styled from '@/styles/Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavBar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className='bg-duo'>
      <div className='container flex justify-between align-center'>
        <Link href='/'>
          <a>
            <Image src={Logo} width={193} height={46} alt='Duoneos' />
          </a>
        </Link>
        <div className='flex align-center'>
          <div className='d-none'>
            <Link href='/get-quote'>
              <a className={styled.get_quote}>get quote</a>
            </Link>
          </div>
          <div className={styled.navToggle}>
            {navbarOpen ? (
              <FaTimes onClick={toggleNavBar} size={28} />
            ) : (
              <FaBars onClick={toggleNavBar} size={28} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
