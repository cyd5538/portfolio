import Image from 'next/image';

interface ProjectImageProps {
  src: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src }) => {
  return <Image src={src} alt="" fill />;
};

export default ProjectImage
