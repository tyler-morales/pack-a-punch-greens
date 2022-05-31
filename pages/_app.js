import '../styles/globals.css'
import {Nav} from '../components/global/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

// Add Split bee tracking
import splitbee from '@splitbee/web'
splitbee.init()

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Pack A Punch Greens | Get your microgreens</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
