import '../styles/globals.css';
import '../styles/prism-nord.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as ga from '../lib/google-analytics';
import Layout from '../components/Layout';
import SlimeLoading from '../components/SlimeLoading';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleRouterChange = (url) => {
      ga.pageView(url);
    };
    const handleStart = () => setPageLoading(true);
    const handleComplete = (url) => {
      setPageLoading(false);
      handleRouterChange(url);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>AsGoshawk</title>
        <meta name='description' content='Asgoshaw Portfolio' />
        <link rel='icon' href='/favicon.ico' />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy='afterInteractive'
        />
        <script 
        id='google-analytics' 
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `
        }}
        />
      </Head>
      <Layout>
        {pageLoading ? (
          <div className='min-h-screen flex items-center justify-center'>
            <SlimeLoading />
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </>
  );
};

export default MyApp;
