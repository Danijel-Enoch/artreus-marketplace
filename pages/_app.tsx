import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from '../components/Main';
import {AppContextProvider} from '../contexts/AppContext'
import { useRouter, Router } from "next/router"
import TopBarProgress from "react-topbar-progress-indicator"





function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(false)

  TopBarProgress.config({
    barColors: {
      "0": "#FFB300",
      "1.0": "#FFB300"
    },
    shadowBlur: 5
  });

  Router.events.on("routeChangeStart", () => {
    setProgress(true) 
 })

 Router.events.on("routeChangeComplete", () => {
    setProgress(false) 
 })

  return (
    <AppContextProvider>
      <Main>
          {progress && <TopBarProgress />}
        <Component {...pageProps} />
      </Main>
      <ToastContainer position="top-center" autoClose={3000}/>
    </AppContextProvider>
  
  
  )
}

export default MyApp
