import { Book, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const project3Data = [
  {
    title: "프로젝트 소개",
    description:(
      <div>
        <div className="tracking-wide leading-4 mb-4">
          <u>님아 그 시장을 가오</u> <br/><br/>
          백종원 유투브에서 맛있어 보이는 식당들을  지역별로 정리하고 쉽게 보여주고 싶어,  이를 위해 님아 그시장을 가오라는 프로젝트를 만들게 되었습니다.
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(250,250,250)] transition duration-200 dark:bg-zinc-800 dark:text-white">
            <Link target="_blank" href="https://yjin.vercel.app/" className="flex gap-2 justify-center items-center">
              <Book /> 배포 주소
            </Link>
          </button>        
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(250,250,250)] transition duration-200 dark:bg-zinc-800 dark:text-white">
            <Link target="_blank" href="https://github.com/cyd5538/Yjin-blog?tab=readme-ov-file" className="flex gap-2 justify-center items-center">
              <Code /> 소스 코드
            </Link>
          </button>        
        </div>
      </div>
    ),
    content: (
      <Image
        src="https://velog.velcdn.com/images/cyd5538/post/70ed226d-16bf-4977-9205-cdac2ab093cc/image.png"
        fill
        alt="linear board demo"
      />
    ),
  },
  {
    title: "주요 기능",
    description:(
      <ul className="tracking-wide leading-4 flex flex-col gap-2">
        <li>- Nextauth를 사용한 로그인,회원가입,SNS 간편 로그인</li> 
        <li>- 태블릿, 모바일도 가능한 반응형 웹 디자인</li> 
        <li>- 지도 API를 이용한 위치 소개</li> 
        <li>- svg 이미지를 이용해서 지역별 식당 필터링</li> 
      </ul>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/689e61b8-7276-4bdc-868d-bde173928067/image.png"
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
        <li><b>Frontend</b> : Nextjs, Typescript, Tailwind, React-query</li> 
        <li><b>Backend</b> : Prisma, MongoDB </li> 
        <li><b>Deploy </b>: vercel</li> 
      </ol>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/394d42a5-be80-4de8-9808-15f2449e1562/image.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "성과 및 배운점",
    description:(
      <ul className="tracking-wide leading-6 flex flex-col gap-2">
        <li>Nextauth를 사용한 로그인, 회원가입 및 SNS 간편 로그인 Oauth</li> 
        <li>카카오톡 지도 API를 사용한 마커 표시</li> 
        <li>SVG 이미지를 사용해서 사용자 친화적인 인터페이스 구성</li>
        <li>React-hook-form을 사용한 유효성 검사</li>
      </ul>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/2f94a113-32f3-49df-89b5-fa53c6cd3188/image.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
];