import React, { useState } from 'react';
import clsx from 'clsx';
import { BiMenu, BiSearch } from 'react-icons/bi';
import Container from './Container';
import Link from 'next/link';
import Hero from './Hero';
import { ROUTES } from '../../constants/routes';
import Image from 'next/image';
import bgSkyImage from '../../public/images/bg-sky.jpg';
import SearchBox from '../SearchBox';
import { useRouter } from 'next/router';

interface Props {
  isHome?: boolean;
}

const Header = ({ isHome }: Props) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { pathname } = useRouter();

  return (
    <Container
      className={clsx(
        'shadow-md',
        isHome && 'flex flex-col min-h-screen relative'
        // bg-[url('/images/bg-sky.jpg')]  bg-fixed bg-no-repeat bg-cover
      )}
    >
      {isHome && (
        <div className="absolute inset-0 -z-50 hero-img-container">
          <Image
            placeholder="blur"
            priority
            src={bgSkyImage}
            alt="img"
            width={1400}
            height={350}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      )}
      <nav className="py-8 border-gray-200 rounded">
        <div className=" flex flex-wrap justify-between items-center">
          <Link href="/">
            <a className="flex">
              {/* <span
                className={clsx(
                  'self-center font-bold text-primary text-3xl whitespace-nowrap',
                  isHome && '!text-gray'
                )}
              >
                Anne.
              </span> */}
              <Image
                src={`/images/logo-${isHome ? 'white' : 'default'}.svg`}
                alt="logo"
                width={180}
                height={40}
              />
            </a>
          </Link>
          <div className="flex md:order-2">
            <SearchBox isHome={isHome} />
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              onClick={() => setShowNavbar(!showNavbar)}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              <BiMenu className="text-2xl" />
            </button>
          </div>
          <div
            className={clsx(
              !showNavbar && 'hidden',
              'justify-between items-center w-full md:flex md:w-auto md:order-1'
            )}
            id="mobile-menu-3"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium">
              {ROUTES.map((route) => (
                <li key={route.label}>
                  <Link href={route.path}>
                    <a
                      className={clsx(
                        'block py-2 pr-4 pl-3 text-secondary border-b md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0',
                        isHome && 'text-gray md:hover:text-slate-400',
                        route.path === pathname &&
                          '!text-primary md:border-b-2 md:pb-1 md:border-b-primary '
                      )}
                    >
                      {route.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {isHome && <Hero />}
    </Container>
  );
};

export default Header;
