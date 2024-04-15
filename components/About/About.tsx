
import React from 'react'
import { LayoutGrid } from '../ui/layout-grid';
import Container from '../Container';

const About = () => {
  return (
    <main className='h-[800px] relative w-full pt-16 pb-14 bg-green-300 dark:bg-zinc-900' id="About">
      <Container>
        <h1 className='text-4xl underline font-bold pb-4 text-shadow-base shadow-yellow-500'>
          About Me
        </h1>
      </Container>
      <LayoutGrid cards={cards}/>
    </main>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-3xl text-white underline">Introtduce</p>
      <p className="font-normal text-lg my-6 text-neutral-200 ">
        안녕하세요! 저는 <b className='text-black bg-yellow-500 px-1 rounded-md'>프론트엔드 개발자 최영진</b>입니다. 새로운 도전을 즐기며, 다양한 프로젝트를 통해 더 나은 개발자로 성장하기 위해 노력하고 있습니다.
      </p>
      <p className="font-normal text-lg my-6 text-neutral-200">
        저는 매일 아침의 시작을 메일함을 확인하며 프론트엔드  <b className='text-black bg-yellow-500 px-1 rounded-md'>기술과 트렌드</b>에 대한 최신 소식을 보는 것으로 시작합니다.
      </p>
      <p className="font-normal text-lg my-4 text-neutral-200">
        또한, 블로그와 노션을 통해 프론트엔드 기술과 배운 점에 대해 정리하고 <b className='text-black bg-yellow-500 px-1 rounded-md'>문서화하는 습관</b>이 있습니다.
      </p>
      <p className="font-normal text-lg my-4 text-neutral-200">
        마지막으로 더 나은 개발자가 되기 위해 <b className='text-black bg-yellow-500 px-1 rounded-md'>CS 공부</b>를 하며 배운 내용을 정리하고, 활용하여 <b className='text-black bg-yellow-500 px-1 rounded-md'>개발 역량을 향상</b>하기 위해 노력하고 있습니다.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-3xl text-white underline">Personality</p>
      <p className="font-normal text-lg my-10  text-neutral-200 md:leading-[40px] leading-[40px]">
        제 성격의 장점은 <b className='text-black bg-yellow-500 px-1 rounded-md'>꼼꼼함</b>과 <b className='text-black bg-yellow-500 px-1 rounded-md'>문서화</b> 하는 습관입니다 
        꼼꼼한 성격 덕분에 작업을 세심하게 처리하고, 문서화를 통해 팀원들에게 정보를 공유할 수 있습니다. 
      </p>
      <p className="font-normal text-lg my-8  text-neutral-200 md:leading-[40px] leading-[40px]">
        완벽주의적인 성향으로 인해 작업이 시간이 오래 걸리고, 불안함을 느끼는 경향이 있습니다. 
        이러한 단점을 극복하기 위해 작업의 우선순위를 명확하게 정하고, 팀원들과의 소통을 강화하는 노력을 기울이고 있습니다.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-3xl text-white underline">Strengths</p>
      <p className="font-normal text-lg my-10 text-neutral-200 md:leading-[40px] leading-[40px]">    
        제 강점은 <b className='text-black bg-yellow-500 px-1 rounded-md'>책임감</b>이 강하고 남에게 피해를 주기 싫어하는 성격으로, 맡은 일에 대해 신중하고 성실하게 처리하며 팀원들과의 원활한 협력을 위해 노력합니다. 
      </p>
      <p className="font-normal text-lg my-4 text-neutral-200 md:leading-[40px] leading-[40px]">    
        또한, 개발에 대한 <b className='text-black bg-yellow-500 px-1 rounded-md'>열정과 관심</b>이 크기 때문에 꾸준히 공부하고 지속적인 성장을 추구합니다.
      </p>
      <p className="font-normal text-lg my-4 text-neutral-200 md:leading-[40px] leading-[40px]">    
        마지막으로, 스스로 학습 목표를 설정하고 달성하기 위해 <b className='text-black bg-yellow-500 px-1 rounded-md'>자기주도적</b>으로 학습합니다.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-3xl text-white ">What I Can Do</p>
      <ul>
        <li className="font-normal text-lg my-2 text-neutral-200 flex gap-2">        
          <span>✍</span> <p>HTML 시맨틱 태그를 적절하게 활용하여 웹 페이지의 구조를 명확하게 표현하고, CSS를 활용하여 반응형 웹 디자인을 구현할 수 있습니다.</p>
        </li>
        <li className="font-normal text-lg my-[10px] text-neutral-200 flex gap-2">        
          <span>✍</span> <p>React 기반의 프론트엔드 시스템을 개발하고 유지관리할 수 있습니다.</p>
        </li>
        <li className="font-normal text-lg my-[10px] text-neutral-200 flex gap-2">        
          <span>✍</span> <p>TypeScript를 사용하여 코드의 안정성을 높이고 에러를 줄일 수 있습니다.</p>
        </li>
        <li className="font-normal text-lg my-[10px] text-neutral-200 flex gap-2">        
          <span>✍</span> <p>React 컴포넌트를 테스트한 경험이 있으며, 주로 Jest와 react-testing-library를 활용하여 유닛 테스트와 통합 테스트를 작성할 수 있습니다.</p>
        </li>
        <li className="font-normal text-lg my-[10px] text-neutral-200 flex gap-2">        
          <span>✍</span> <p>Git을 이용하여 코드 형상관리를 할 수 있습니다.</p>
        </li>
        <li className="font-normal text-lg my-[10px] text-neutral-200 flex gap-2">        
          <span>✍</span> <p>서버 사이드 개발 경험이 있으며, Express나 Next.js를 사용하여 백엔드를 개발한 적이 있습니다. 클라이언트와 서버 간의 데이터 통신과 RESTful API를 구현할 수 있습니다.</p>
        </li>
      </ul>
    </div>
  );
};
 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    title: "Introtduce",
    thumbnail:
      "https://velog.velcdn.com/images/cyd5538/post/598c3d7b-c46f-4b54-80b1-35dce34277f6/image.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    title: "Personality",
    thumbnail:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    title: "strengths",
    thumbnail:
      "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    title: "What I Can Do",
    thumbnail:
      "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default About
