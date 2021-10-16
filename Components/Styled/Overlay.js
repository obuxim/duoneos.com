import React from 'react';
import styled from '../../styles/Overlay.module.css';

const Overlay = ({ percentage }) => {
  return (
    <div
      className={styled.overlay}
      style={{ backgroundColor: `rgba(0, 0, 0, ${percentage / 100})` }}
    ></div>
  );
};

export default Overlay;
