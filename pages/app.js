import Layout from '../layouts/Layout'
import { AppLayout } from '../layouts/AppLayout'
import HabitList from '../components/HabitList'

export default function App() {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <HabitList />
        </div>
      </div>
    </>
  )
}

App.getLayout = function getLayout(home) {
  return (
    <Layout>
      <AppLayout>{home}</AppLayout>
    </Layout>
  )
}
