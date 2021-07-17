
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

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
    <Search />
    <Component {...pageProps} />
    <Footer />
  </>
}
export default MyApp
