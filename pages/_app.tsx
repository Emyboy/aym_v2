
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

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Provider store={store}>
      <Navbar />
      <Search />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  </>
}
export default MyApp
