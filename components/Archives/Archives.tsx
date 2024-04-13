import React from 'react'
import Container from '../Container'
import ArchivesCard from './ArchivesCard';

const Archives = () => {
  return (
    <main className='relative w-full pt-16 pb-20 bg-green-300 dark:bg-zinc-900' id="Archiving">
      <Container>
        <h1 className='text-4xl underline font-bold text-shadow-base shadow-yellow-500'>
          Archiving
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center pt-10'>
          <ArchivesCard />
        </div>
      </Container>
    </main>
  )
}

export default Archives
