import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Main from '../components/Main'
import {AppContextProvider} from '../contexts/AppContext'



function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppContextProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
    </AppContextProvider>
  
  
  )
}

export default MyApp
