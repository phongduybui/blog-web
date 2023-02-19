import '../styles/globals.css';
import '../styles/_pagination.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { SWRConfig } from 'swr';
import { fetcher } from '../services/request';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Component {...pageProps} />
        <ToastContainer theme="colored" />
      </SWRConfig>
    </Layout>
  );
}

export default MyApp;
