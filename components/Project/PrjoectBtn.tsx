import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import { project1Data } from '@/data/project1Data';
import { project2Data } from '@/data/project2Data';
import { project3Data } from '@/data/project3Data';

interface PrjoectBtnProps {
  projectNumber: number;
}

const ModalContent = [
  {
    title : "축구 커뮤니티 사이트",
    body: <StickyScroll content={project1Data} />
  },
  {
    title : "블로그",
    body: <StickyScroll content={project2Data} />
  },
  {
    title : "님아 그 시장을 가오",
    body: <StickyScroll content={project3Data} />
  },
  {
    title : "포트폴리오 사이트",
    body: <p>안녕하세요4</p>
  },
]

const PrjoectBtn: React.FC<PrjoectBtnProps> = ({ projectNumber }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const content = ModalContent[projectNumber];

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="mt-2 p-2 dark:bg-zinc-800 dark:text-white rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
        자세히 보기 
      </button>
      {isOpen ? 
        <ProjectModal
          title={content.title}
          body={content.body}
          onClose={closeModal}
        />
        : null
      }
    </div>
  );
};

export default PrjoectBtn;
