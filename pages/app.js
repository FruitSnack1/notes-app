import Layout from '../layouts/Layout'
import { AppLayout } from '../layouts/AppLayout'
import HabitList from '../components/HabitList'
import { NewHabit } from '../components/NewHabit'

export default function App() {
  return (
    <>
      <div className='row'>
        <div className='col-6'>
          <HabitList />
          <NewHabit />
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
