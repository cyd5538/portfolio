import React from 'react'
import Container from '../Container';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { items } from '@/data/ProjectData';

const Project = () => {
  return (
    <main className='relative w-full pt-16 pb-20 bg-white dark:bg-zinc-800' id="Project">
    <Container>
      <h1 className='text-4xl underline font-bold pb-10 text-shadow-base shadow-yellow-500'>Project</h1>
      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </Container>
    </main>
  )
}



export default Project
