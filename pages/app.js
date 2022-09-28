import Layout from '../layouts/Layout'
import { AppLayout } from '../layouts/AppLayout'

export default function App() {
  return <h3>app </h3>
}

App.getLayout = function getLayout(home) {
  return (
    <Layout>
      <AppLayout>{home}</AppLayout>
    </Layout>
  )
}
