import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
/* import 'bootstrap/dist/css/bootstrap.css' */

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Peachy Keyn</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    
  )
}

export default MyApp
