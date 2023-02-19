import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <>
      <Header isHome={router.pathname === '/'} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
