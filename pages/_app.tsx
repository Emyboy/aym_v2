
import '../styles/globals.css';
import '../assets/css/all.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/custom.css';
import '../assets/css/elegant-font-icons.css';
import '../assets/css/style.css';

import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import Search from '../components/Search/Search';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import PageLoading from '../components/PageLoading/PageLoading';
import { useRouter } from 'next/router'
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [pageLoading, setPageLoading] = React.useState(false)
  const router = useRouter()
  React.useEffect(() => {
    router.events.on('routeChangeStart', () => setPageLoading(true))
    router.events.on('routeChangeComplete', () => setPageLoading(false))
    return () => {
      router.events.off('routeChangeStart', () => setPageLoading(false))
    }
  }, [])
  return <>
    <Provider store={store}>

      {pageLoading ? <PageLoading /> : <>
        <Navbar />
        <Search />
        <Component {...pageProps} />
        <Footer />
      </>
      }
    </Provider>
  </>
}
export default MyApp
