
import React from 'react'
import { LayoutGrid } from '../ui/layout-grid';
import Container from '../Container';

const About = () => {
  return (
    <main className='h-[800px] relative w-full pt-16 pb-14 bg-yellow-300 dark:bg-zinc-900' id="About">
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
        안녕하세요! 저는 프론트엔드 개발자 <b className='text-shadow-base shadow-yellow-500'>최영진</b>입니다. 새로운 도전을 즐기며, 다양한 프로젝트를 통해 더 나은 개발자로 성장하고 있습니다.
      </p>
      <p className="font-normal text-lg my-6 text-neutral-200">
        메일을 확인하며 프론트엔드 기술과 트렌드에 대한 최신 소식을 보는 것으로 하루를 시작합니다.
      </p>
      <p className="font-normal text-lg my-6 text-neutral-200">
        블로그와 노션을 통해 프론트엔드 기술과 배운 점에 대해 정리하고 문서화하는 습관이 있습니다.
      </p>
      <p className="font-normal text-lg my-6 text-neutral-200">
        CS 공부를 병행하며 습득한 지식을 체계적으로 정리하고, 이를 활용하여 프론트엔드 개발 역량을 향상시키고 있습니다.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-3xl text-white underline">내 성격의 장단점</p>
      <p className="font-normal text-xl my-4 max-w-lg text-neutral-200 leading-10">
      제 성격의 장점은 <b className="underline ">친화적인 성격</b>으로, 다양한 역할을 가진 동료들과의 협업을 원활하게 이끌어내며,  
      <b className="underline">조직 내에 빠르게 적응</b>할 수 있습니다. 그러나 가끔은 결정을 내리기 어려워하는 유유부단한 면이 있습니다. 
      이를 보완하기 위해 적극적으로 소통하고 함께 토의하여 결정을 내리고 있습니다.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-3xl text-white underline">나만의 강점</p>
      <p className="font-normal text-xl my-4 max-w-lg text-neutral-200 leading-8">
      제 강점은 끊임없는 학습과 성장에 대한 열정입니다. 팀원들과 소통하면서 배우는 것을 즐기고, 제가 알고 있는 지식이 있다면 적극적으로 공유하여 팀 전체가 함께 성장할 수 있도록 노력합니다. 
      </p>
      <p className="font-normal text-xl my-4 max-w-lg text-neutral-200 leading-8">
      또한, 프로젝트에 새로운 기술이나 라이브러리를 도입할 때에는 주도적으로 제안하고, 팀원들과 함께 새로운 기술을 배우고 적용하는 과정을 즐깁니다. 
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-3xl text-white ">저는 ______ 사람입니다.</p>
      <p className="font-normal text-xl my-8 max-w-lg text-neutral-200">
        가독성과 유지보수가 용이한 코드를 짜기위해 노력하는
      </p>
      <p className="font-normal text-xl my-8 max-w-lg text-neutral-200">
        팀원들과 적극적으로 소통하는
      </p>
      <p className="font-normal text-xl my-8 max-w-lg text-neutral-200">
        새로운 기술의 습득과 변화에 두려워하지 않는
      </p>
      <p className="font-normal text-xl my-4 max-w-lg text-neutral-200">
        자신의 의견을 잘 드러내는
      </p>
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
      "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    title: "내 성격의 장단점",
    thumbnail:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    title: "나만의 강점",
    thumbnail:
      "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    title: "저는 ___ 사람입니다.",
    thumbnail:
      "https://images.pexels.com/photos/5474296/pexels-photo-5474296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default About
