
import React from 'react'
import TooltipProviders from './TooltipProviders'


const Footer = () => {
  return (
    <footer className='flex justify-center flex-col gap-4 items-center pt-6 pb-6 bg-Lime-300 dark:bg-zinc-900'>
      <div className='flex gap-4'>
        <TooltipProviders title="Github" link="https://github.com/cyd5538" img="https://skillicons.dev/icons?i=github"/>
        <TooltipProviders title="Blog" link="https://yjin.vercel.app/" img="https://velog.velcdn.com/images/cyd5538/profile/bd6535d3-30d0-4ff8-a525-620c5850508d/social_profile.jpeg"/>
        <TooltipProviders title="My document" link="https://cyd5538.github.io/" img="https://velog.velcdn.com/images/cyd5538/post/735e83d2-1a21-4529-811a-46500bad622c/image.png"/>
      </div>
      <p>© 2024. Choi Young Jin. All rights reserved.</p>
    </footer>
  )
}

export default Footer
