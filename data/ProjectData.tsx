import ProjectImage from '../components/Project/ProjectImage';
import PrjoectBtn from '../components/Project/PrjoectBtn';

export const items = [
  {
    title: "프로젝트1. 축구 커뮤니티 사이트",
    description:
      "해외 축구 팬들을 위한 통합 커뮤니티 사이트입니다. 다양한 해외 축구 리그와 팀의 정보를 한 곳에서 제공하고 있습니다.",
    header: <ProjectImage src="https://velog.velcdn.com/images/cyd5538/post/ec904f25-ebca-4e8c-a17f-b738bc80a3ed/image.png" />,
    className: "md:col-span-1",
    icon: <PrjoectBtn projectNumber={0}/>,
  },
  {
    title: "프로젝트2. 블로그",
    description:
      "기존 블로그 플랫폼을 사용하지 않고 나만의 UI를 사용한 블로그를 직접 만들고 배포해서 운영하고 싶어서 만든 프로젝트입니다.",
    header: <ProjectImage src="https://velog.velcdn.com/images/cyd5538/post/7e8751a3-d606-408f-8d70-671ace5443f3/image.png" />,
    className: "md:col-span-1",
    icon: <PrjoectBtn projectNumber={1}/>,
  },
  {
    title: "프로젝트3. 님아 그 시장을 가오",
    description:
      "백종원 유투브에서 맛있어 보이는 식당들을 지역별로 정리하고 쉽게 보여주고 싶어 만든 프로젝트입니다.",
    header: <ProjectImage src="https://velog.velcdn.com/images/cyd5538/post/8743b0ed-e0c0-4652-b3b9-14ae7556b976/image.png" />,
    className: "md:col-span-1",
    icon: <PrjoectBtn  projectNumber={2}/>,
  },
  {
    title: "프로젝트4. 포트폴리오 사이트",
    description:
      "Nextjs14와 tailwindcss framer-motion을 사용한 포트폴리오 사이트입니다.",
    header: <ProjectImage src="https://velog.velcdn.com/images/cyd5538/post/8743b0ed-e0c0-4652-b3b9-14ae7556b976/image.png" />,
    className: "md:col-span-1",
    icon: <PrjoectBtn projectNumber={3}/>,
  },
];
