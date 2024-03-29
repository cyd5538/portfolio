"use client";

import useWindowSize from '@/hook/useWindowSize';
import React from 'react'
import Confetti from 'react-confetti'

const HomeBlossom = () => {
  const {width, height} = useWindowSize();
  
  return (
    <Confetti
      className='z-50'
      width={width-30}
      height={height}
      colors={["ff99cc"]}
      numberOfPieces={30}
      friction={0.99}
      gravity={0.01}
      opacity={1}
      drawShape={ctx => {
        ctx.beginPath();
        const petals = 5; // 꽃잎 개수
        const radius = 10; // 꽃잎 길이
        const centerX = 0;
        const centerY = 0;
        const angleIncrement = (2 * Math.PI) / petals;
        for (let i = 0; i < petals; i++) {
          const angle = i * angleIncrement;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const controlX = centerX + radius * Math.cos(angle + angleIncrement / 2);
          const controlY = centerY + radius * Math.sin(angle + angleIncrement / 2);
          ctx.moveTo(centerX, centerY);
          ctx.quadraticCurveTo(controlX, controlY, x, y);
        }
        ctx.fill();
        ctx.closePath();
      }}
    />
  )
}
export default HomeBlossom;