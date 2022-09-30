import Layout from '../layouts/Layout'
import { AppLayout } from '../layouts/AppLayout'
import HabitList from '../components/HabitList'

export default function App() {
  return (
    <>
      <h3>app </h3>
      <HabitList />
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
