import '../styles/globals.css'
import {Nav} from '../components/global/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {CartContext, useCartState} from '../hooks/useCart'

// Add Split bee tracking
import splitbee from '@splitbee/web'
splitbee.init()

function MyApp({Component, pageProps}) {
  const cart = useCartState()

  return (
    <>
      <Head>
        <title>Pack A Punch Greens | Get your microgreens</title>
      </Head>
      <CartContext.Provider value={cart}>
        <Nav />
        <div>
          <ToastContainer
            toastClassName="bg-blue-600"
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
        <Component {...pageProps} />
      </CartContext.Provider>
      <Footer />
    </>
  )
}

export default MyApp
