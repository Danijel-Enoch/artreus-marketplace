import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from '../components/Main'
import {AppContextProvider} from '../contexts/AppContext'



function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppContextProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
      <ToastContainer />
    </AppContextProvider>
  
  
  )
}

export default MyApp
