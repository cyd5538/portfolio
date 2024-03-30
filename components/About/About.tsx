
import React from 'react'
import { LayoutGrid } from '../ui/layout-grid';
import cards from '@/lib/aboutData';
import Container from '../Container';

const About = () => {
  return (
    <main className='h-screen relative w-full pt-16 pb-14 bg-sky-600' id="About">
      <Container>
        <h1 className='text-3xl underline text-white'>
          About Me
        </h1>
      </Container>
      <LayoutGrid cards={cards} />
    </main>
  )
}

export default About
