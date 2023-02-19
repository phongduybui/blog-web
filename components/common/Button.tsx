import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  href?: string;
}

const Button = ({ children, className, bordered, href }: Props) => {
  return href ? (
    <Link href={href}>
      <a
        className={clsx(
          'py-3 px-9 text-base font-semibold text-white bg-primary rounded-full hover:bg-secondary inline-block leading-tight   shadow-md hover:shadow-lg focus:bg-indigo-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:shadow-lg transition duration-150 ease-in-out capitalize',
          bordered &&
            'bg-[#ddd] text-secondary border-2 border-inherit hover:bg-[#bbb] hover:border-primary focus:bg-[#bbb] active:bg-[#bbb]',
          className
        )}
      >
        {children}
      </a>
    </Link>
  ) : (
    <button
      className={clsx(
        'py-3 px-9 text-base font-semibold text-white bg-primary rounded-full hover:bg-secondary inline-block leading-tight   shadow-md hover:shadow-lg focus:bg-indigo-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:shadow-lg transition duration-150 ease-in-out capitalize',
        bordered &&
          'bg-[#ddd] text-secondary border-2 border-inherit hover:bg-[#bbb] hover:border-primary focus:bg-[#bbb] active:bg-[#bbb]',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
