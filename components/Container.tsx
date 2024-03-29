import React from 'react';

interface ContainerProps {
  children?: React.ReactNode; 
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='container w-full relative overflow-x-hidden'>
      {children} 
    </div>
  );
};

export default Container;