import React from 'react'
import { DirectionAwareHover } from '../ui/direction-aware-hover'
import { archivesData } from '@/data/archivesData'
import Link from 'next/link'

const ArchivesCard = () => {
  return (
    <>
      {archivesData.map((data) => (
        <DirectionAwareHover imageUrl={data.imageUrl} key={data.title}>
          <h2 className="font-bold text-xl mb-4">{data.title}</h2>
          {data.description.map((desc, index) => (
            <p key={index} className="font-normal text-sm pb-2">{desc}</p>
          ))}
          <Link href={data.link}>
            <button className="px-4 py-2 rounded-md border text-black border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              👉{data.linkTitle}
            </button>
          </Link>
        </DirectionAwareHover>
      ))}
    </>
  )
}

export default ArchivesCard
