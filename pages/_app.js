import '../styles/globals.css'
import {Nav} from '../components/global/Nav'
import Footer from '../components/Footer'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
