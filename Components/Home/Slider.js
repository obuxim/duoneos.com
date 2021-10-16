import React from 'react';
import Image from 'next/image';
import Overlay from '../Styled/Overlay';
import Header from '../Header';
import SliderImage from '../../public/images/slider.png';
import styled from '../../styles/Slider.module.css';

const Slider = () => {
  return (
    <div className={styled.slider}>
      <Image src={SliderImage} width={1920} height={900} />
      <Overlay percentage={70} style={{ zIndex: 999 }} />
      <Header />
      <div className={styled.sliderContent}>
        <div style={{ flexGrow: 1 }}></div>
        <div className='flex-column justify-center container' style={{ flexGrow: 3 }}>
          <h2 className={styled.tagline}>your next technology partner</h2>
          <div className='d-none'>
            <h1 className={styled.brandName}>duoneos</h1>
          </div>
          <p className={styled.brandDescription}>
            We provide tech consultancy for your startup and offer one-stop tech solutions.
          </p>
        </div>
        <div className='justify-end container' style={{ flexGrow: 1 }}></div>
      </div>
    </div>
  );
};

export default Slider;
