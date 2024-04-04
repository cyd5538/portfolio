import { AnimatedTooltip } from "../ui/animated-tooltip";

interface SkillListProps {
  title: string
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[]
}
const SkillList:React.FC<SkillListProps> = ({title, items}) => {
  return (
    <div className="mt-2 w-full">
      <h2 className='text-xl fontb-semibold mb-2 font-bold'>{title}</h2>
      <div className="flex flex-row items-center justify-start gap-4 mb-4 w-full">
        <AnimatedTooltip items={items} />
      </div>
    </div>
  )
}

export default SkillList
