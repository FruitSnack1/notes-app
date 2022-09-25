import 'bootstrap/dist/css/bootstrap.css'
import { AuthProvider } from '../src/context/authContext'
import '../styles/scss/global.scss'
// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
