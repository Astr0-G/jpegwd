import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { MoralisProvider } from "react-moralis"


function MyApp({ Component, pageProps }: AppProps) {
  return(
  <MoralisProvider initializeOnMount={false}>
   <Component {...pageProps} />
   </MoralisProvider>
  )
  
}

export default MyApp

