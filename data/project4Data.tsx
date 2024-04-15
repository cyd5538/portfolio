import { Book, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const project4Data = [
  {
    title: "프로젝트 소개",
    description:(
      <div>
        <div className="tracking-wide leading-4 mb-4">
          <u>Nextjs로 만든 포트폴리오 사이트입니다.</u> <br/><br/>
          Tailwind CSS로 반응형으로 제작하고, Framer-Motion을 활용하여 동적인 애니메이션 효과를 적용했습니다.
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(250,250,250)] transition duration-200 dark:bg-zinc-800 dark:text-white">
            <Link target="_blank" href="https://youngjin.vercel.app/" className="flex gap-2 justify-center items-center">
              <Book /> 배포 주소
            </Link>
          </button>        
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(250,250,250)] transition duration-200 dark:bg-zinc-800 dark:text-white">
            <Link target="_blank" href="https://github.com/cyd5538/Yjin-blog" className="flex gap-2 justify-center items-center">
              <Code /> 소스 코드
            </Link>
          </button>        
        </div>
      </div>
    ),
    content: (
      <Image
        src="https://velog.velcdn.com/images/cyd5538/post/eb3dc244-0ab4-406f-b885-20a24b838611/image.png"
        fill
        alt="linear board demo"
      />
    ),
  },
  {
    title: "주요 기능",
    description:(
      <ul className="tracking-wide leading-4 flex flex-col gap-2">
        <li>- Framer-Motion을 사용한 애니메이션</li> 
        <li>- tailwindcss를 사용한 반응형 웹 디자인</li> 
        <li>- canvas를 사용한 벚꽃 떨어지는 효과</li> 
        <li>- nodemailer를 사용한 이메일 전송</li> 
      </ul>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/d93a12d8-5de6-4a1e-aea5-7d265e106a85/image.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "사용한 기술",
    description:(
      <ol className="tracking-wide leading-4 flex flex-col gap-2 mb-24">
        <li><b>Frontend</b> : Nextjs14, Typescript, Tailwind, Framer-motion</li> 
        <li><b>Deploy </b>: vercel</li> 
      </ol>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/80791043-0955-4332-978a-48d550d9f2d8/image.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "프로젝트를 통해 배운 점",
    description:(
      <ul className="tracking-wide leading-6 flex flex-col gap-2">
        <li>Framer Motion을 사용하여 다양한 애니메이션을 구현하고 배웠습니다.</li> 
        <li>canvas를 활용하여 애니메이션을 구현하는 방법을 배웠습니다</li> 
        <li>프로젝트 정보를 객체 배열로 구성하여 효율적으로 관리하는 방법</li>
        <li>Next.js 14를 사용하면서 공식 문서를 참고하여 이미지 최적화, 라우팅, 데이터 페칭 등의 주요 기능을 배웠습니다.</li>
      </ul>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/fa0ea7b6-5f80-4f73-b4b3-29743553997e/image.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
];