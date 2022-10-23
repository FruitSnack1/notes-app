import 'bootstrap/dist/css/bootstrap.css'
import '../styles/scss/global.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
config.autoAddCss = false
// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
    </QueryClientProvider>
  )
}

export default MyApp
