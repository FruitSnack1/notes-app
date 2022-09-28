import { AppLayout } from '../../layouts/AppLayout'
import Layout from '../../layouts/Layout'

export default function Trash() {
  return <div>trash</div>
}
Trash.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AppLayout>{page}</AppLayout>
    </Layout>
  )
}
