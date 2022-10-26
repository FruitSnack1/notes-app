import { AppLayout } from '../../layouts/AppLayout'
import Layout from '../../layouts/Layout'

export default function Settings() {
  return <div>setting </div>
}
Settings.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AppLayout>{page}</AppLayout>
    </Layout>
  )
}
