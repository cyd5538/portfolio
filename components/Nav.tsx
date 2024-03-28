import React from 'react'
import { menu } from '@/lib/menuData'
import { AnimatedTooltip } from './ui/animated-tooltip'

const Nav = () => {
  return (
    <header className='z-40 flex flex-col fixed pb-10 right-10  justify-center gap-12 min-h-screen'>
      <AnimatedTooltip items={menu}/>     
    </header>
  )
}

export default Nav
