
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

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
 
const cardss = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://skillicons.dev/icons?i=nextjs",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://skillicons.dev/icons?i=nextjs",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://skillicons.dev/icons?i=nextjs",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://skillicons.dev/icons?i=nextjs",
  },
];

export default About
