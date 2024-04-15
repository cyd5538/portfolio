import React from 'react';

interface ContainerProps {
  children?: React.ReactNode; 
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='container w-full relative overflow-hidden pb-20'>
      {children} 
    </div>
  );
};

export default Container;