import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { MdHome, MdNavigateNext } from 'react-icons/md';

interface ItemProps {
  isCurrent?: boolean;
  children: React.ReactNode;
  href: string;
}

const Item = ({ href = '/', children, isCurrent }: ItemProps) => {
  return (
    <li>
      <div className="flex items-center">
        <MdNavigateNext className="w-6 h-6 " color="#aaa" />
        <Link href={href}>
          <a
            className={clsx(
              'ml-1 text-sm font-medium text-slate-400 hover:text-slate-600 md:ml-2',
              isCurrent && 'text-slate-500'
            )}
          >
            {children}
          </a>
        </Link>
      </div>
    </li>
  );
};

interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
}

const Breadcrumb = ({ children, className }: BreadcrumbProps) => {
  return (
    <nav className={clsx('flex', className)} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/">
            <a className="inline-flex items-center text-sm text-slate-400 hover:text-slate-600">
              <MdHome className="mr-2 w-4 h-4" />
              Home
            </a>
          </Link>
        </li>
        {children}
      </ol>
    </nav>
  );
};

Breadcrumb.Item = Item;

export default Breadcrumb;
