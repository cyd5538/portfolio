import React from 'react'
import { TypewriterEffect } from '../ui/typewriter-effect'
import HomeBlossom from './HomeBlossom';
import Container from '../Container';

const Main = () => {

  const words = [
    {
      text: "안녕하세요",
    },
    {
      text: "웹",
    },
    {
      text: "프론트엔드",
    },
    {
      text: "개발자",
    },
    {
      text: "최영진",
      className: "text-white dark:text-white underline",
    },
    {
      text: "입니다.",
    },
  ];

  return (
    <main className='h-full w-full pt-14 bg-sky-500'>
      <Container>
        <HomeBlossom />
        <div className='h-screen w-full flex justify-center items-center z-40'>
          <div className='w-2/3'>
            <TypewriterEffect words={words}/>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Main
