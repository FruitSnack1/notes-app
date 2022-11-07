import Layout from '../layouts/Layout'
import { AppLayout } from '../layouts/AppLayout'
import HabitList from '../components/HabitList'
import { NewHabit } from '../components/NewHabit'
import cookie from 'cookie'

export default function App({ cookies }) {
  return (
    <>
      <div className='row mb-5  '>
        <div className='col-12'>
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
