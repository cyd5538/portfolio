import React from 'react';

interface ContainerProps {
  children?: React.ReactNode; 
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='bg-sky-500 w-full h-screen'>
      {children} 
    </div>
  );
};

export default Container;