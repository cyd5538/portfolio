"use client";

import React, { useEffect, useState } from 'react'
import { menu } from '@/lib/menuData'
import { Home, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from './ui/Theme-toggle';

const Nav = () => {
  const [menuopen, setMenuopen] = useState<boolean>(false);  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgColor, setBgColor] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      if (currentPosition > 0) {
        setBgColor('bg-white dark:bg-zinc-900');
      } else {
        setBgColor('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`z-50 w-full h-16 ${bgColor} fixed left-0 top-0 justify-center items-center gap-12`}>
      <nav className='container flex justify-between items-center h-14 sm:px-12 px-4'>
        <h1 className='cursor-pointer font-bold text-xl hover:text-sky-500 opacity-100'>
          <Link href={"#Home"}>
            Home
          </Link>
        </h1>
        <ul className='sm:flex gap-4 sm:gap-8 hidden items-center justify-center'>
          {menu.map(data => (
            <li className='hover:text-sky-500 cursor-pointer font-bold opacity-100' key={data.id}>
              <Link href={`#${data.name}`}>
                {data.name}
              </Link>
            </li>
          ))}
          <li><ModeToggle /></li>
        </ul>
        <div onClick={() => setMenuopen(!menuopen)} className='sm:hidden flex cursor-pointer p-2 bg-sky-500 rounded-lg text-white hover:bg-sky-600 dark:bg-zinc-950 hover:dark:bg-zinc-800 transition duration-500 delay-100'>
          {menuopen ? <X />  : <Menu /> } 
          {menuopen ? <ResponsiveNavbar /> : null }
        </div>
      </nav>
    </header>
  )
}

const ResponsiveNavbar = () => {
  return (
    <div className='absolute top-14 left-0 w-full h-[600px] bg-sky-900 dark:bg-zinc-800 py-4 px-2'>
      <ul className='flex flex-col gap-4 sm:gap-4'>
        {menu.map(data => (
          <li className='flex' key={data.id}>
            <Link href={`#${data.name}`} className='py-2 rounded-md hover:bg-sky-600 w-full px-2 cursor-pointer font-bold opacity-100'>
              {data.name}
            </Link>
          </li>
        ))}
        <li className='absolute right-4 bottom-40'><ModeToggle /></li>
      </ul>
    </div> 
  )
}

export default Nav
