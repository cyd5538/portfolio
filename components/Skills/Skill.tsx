import React from 'react'
import Container from '../Container'
import SkillList from './SkillList'
import { backend, etc, Frontend, statusManagement, style, test } from '@/data/skillsData'

const Skill = () => {
  return (
    <main className='relative w-full pt-16 pb-20  bg-white dark:bg-zinc-800' id="Skills">
      <Container>
        <h1 className='text-4xl underline font-bold text-shadow-base shadow-yellow-500'>
          Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 justify-center items-center">
          <SkillList items={Frontend} title={"프레임워크 및 언어"}/>
          <SkillList items={statusManagement} title={"상태 관리"}/>
          <SkillList items={style} title={"스타일"}/>
          <SkillList items={backend} title={"백엔드"}/>
          <SkillList items={etc} title={"기타"}/>
          <SkillList items={test} title={"테스트"}/>
        </div>
      </Container>
    </main>
  )
}

export default Skill
