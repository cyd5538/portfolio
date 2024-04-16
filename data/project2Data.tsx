import { Book, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const project2Data = [
  {
    title: "프로젝트 소개",
    description:(
      <div>
        <div className="tracking-wide leading-4 mb-4">
          <u>Nextjs로 만든 마크다운 블로그입니다.</u> <br/><br/>
          나만의 UI를 사용한 블로그를 직접 만들고 배포해서 운영하고 싶어서 만든 프로젝트입니다.
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(250,250,250)] transition duration-200 dark:bg-zinc-800 dark:text-white">
            <Link target="_blank" href="https://yjin.vercel.app/" className="flex gap-2 justify-center items-center">
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
        src="https://velog.velcdn.com/images/cyd5538/post/d8ac5839-7306-45ee-a329-b2bd2f083055/image.png"
        fill
        alt="linear board demo"
      />
    ),
  },
  {
    title: "주요 기능",
    description:(
      <ul className="tracking-wide leading-4 flex flex-col gap-2">
        <li>- 포스트 카테고리 필터링</li> 
        <li>- 태그로 검색 구현</li> 
        <li>- 포스트 내 TOC(목차) 구현</li> 
        <li>- Giscus를 이용한 댓글 시스템</li> 
      </ul>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/619ac153-4528-40fb-ad79-ef1bbf607d27/image.png"
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
        <li><b>Frontend</b> : Nextjs, Typescript, Tailwind, shadn/ui</li> 
        <li><b>Deploy </b>: vercel</li> 
        <li><b>etc </b>: Giscus, contentlayer</li> 
      </ol>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/fdbed0a5-4df1-48d7-9243-0ebdd19b6d29/image.png"
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
        <li>서버 사이드 렌더링(SSR)과 클라이언트 사이드 렌더링(CSR)의 조합을 통해 검색 엔진 최적화(SEO)</li> 
        <li>Google Sitemap에 등록하여 웹 사이트의 검색 엔진 노출</li> 
        <li>Google Analytics에 등록하여 다양한 디바이스에서의 사용자 행동 및 반응을 모니터링하고 분석</li>
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