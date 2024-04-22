import { Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const project1Data = [
  {
    title: "프로젝트 소개",
    description:(
      <div>
        <div className="tracking-wide leading-6 mb-4">
          <u>해외 축구 팬들을 위한 통합 커뮤니티 사이트입니다.</u> <br/><br/>
          좋아하는 팀이나 선수의 팬들끼리 채팅도 할 수 있고, 순위, 팀 정보, 최신 및 인기 게시글 등을 한 곳에서 할 수 있게 만든 프로젝트입니다.
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(250,250,250)] transition duration-200 dark:bg-zinc-800 dark:text-white">
            <Link target="_blank" href="https://github.com/cyd5538/community" className="flex gap-2 justify-center items-center">
              <Code /> 소스 코드
            </Link>
          </button>        
        </div>
      </div>
    ),
    content: (
      <Image
        src="https://velog.velcdn.com/images/cyd5538/post/a3e46ca0-6b83-4eee-825f-bf668140324f/image.gif"
        fill
        alt="linear board demo"
      />
    ),
  },
  {
    title: "주요 기능",
    description:(
      <ul className="tracking-wide leading-6 flex flex-col gap-2">
        <li>- React-query를 사용하여 무한 스크롤 구현
          <Link className="text-xs underline cursor-pointer" target="_blank" href="https://yjin.vercel.app/posts/react-query-infinite">(관련 포스트)</Link>
        </li> 
        <li>- React-hook-form과 Zod를 사용하여 사용자 입력값의 유효성 체크
          <Link className="text-xs underline cursor-pointer" target="_blank" href="https://yjin.vercel.app/posts/zod-reacthookform">(관련 포스트)</Link>
        </li> 
        <li>- Post 최신순,댓글순,좋아요순  CRUD, 댓글 CRUD, 좋아요 싫어요 구현</li> 
        <li>- 쿼리 스트링을 이용한 필터링 기능 구현</li> 
        <li>- JWT(Json Web Token) 토큰 기반의 사용자 인증</li> 
        <li>- vitest, react-testing-libeary 사용한 단위 테스트</li> 
      </ul>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/69699def-e38e-4bd4-917e-c6bc8c180a5e/image.gif"
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
      <ol className="tracking-wide leading-6 flex flex-col gap-2">
        <li><b>Frontend</b> : Vite, Typescript, Tailwind, React-query, zustand</li> 
        <li><b>Backend </b>: Express Mongodb</li> 
        <li><b>test </b>: vitest, react-testing-libeary</li> 
        <li><b>sotrage:</b>: firebase</li> 
      </ol>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/28299664-0d3d-41e7-981a-153d510a4295/image.gif"
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
        <li>Zustand를 이용해 전역 상태관리 하는 방법을 배웠습니다.</li> 
        <li>클라이언트와 서버 간의 통신과 데이터 처리 과정에서 발생할 수 있는 다양한 네트워크 문제들을 해결하는 능력을 배울 수 있었습니다.</li> 
        <li>Socket을 사용한 양방향 통신과 실시간 데이터 전송을 배웠습니다.</li> 
        <li>React Query를 활용하여 서버 데이터를 효율적으로 관리하고, 데이터를 캐싱하고 무한 스크롤 등의 기능을 구현할 수 있었습니다.</li> 
        <li>단위 테스트하는 방법을 배웠습니다.</li> 
      </ul>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/eb040c37-381e-4379-8473-a81faa3f6efe/image.png"
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
        <li>탭 메뉴를 키-값 형태로 매핑하여 유지보수를 간편하게 하는 방법을 배움</li> 
        <li>Redux 대신 Zustand를 사용하여 코드 양을 약 50% 줄였습니다.</li> 
        <li>React Query의 useQuery와 useMutation 등의 훅을 사용하여 코드 양을 약 30% 감소</li> 
        <li>vitest와 react-testing-library를 이용하여 단위 테스트 코드를 작성하여 코드의 안정성을 향상</li> 
        <li>폴더 구조를 개선하여 코드의 가독성과 유지보수성을 향상</li> 
      </ul>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://velog.velcdn.com/images/cyd5538/post/094da9f3-7e35-4f73-945d-31642249ca33/image.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
];