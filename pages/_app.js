import 'bootstrap/dist/css/bootstrap.css'
import '../styles/scss/global.scss'
// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
