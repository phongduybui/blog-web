import clsx from 'clsx';
import React, { MutableRefObject } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  containerRef?: MutableRefObject<HTMLDivElement | null>;
}

const Container = ({ children, className, containerRef }: Props) => {
  return (
    <div
      className={clsx('w-full min-w-full mx-auto px-8 sm:px-16', className)}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default Container;
