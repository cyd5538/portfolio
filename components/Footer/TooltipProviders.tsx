import React from 'react'
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import Link from 'next/link';
import Image from 'next/image';

interface TooltipProvidersProps {
  link: string;
  img: string;
  title: string;
}

const TooltipProviders:React.FC<TooltipProvidersProps> = ({img, link, title}) => {
  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={link} target="_blank">
          <Image
            src={img}
            alt={title}
            width={48}
            height={48}
            className="w-14 h-14 rounded-full hover:border-2 border-black transition duration-500"
          />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}

export default TooltipProviders
