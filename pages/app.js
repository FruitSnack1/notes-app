import RootLayout from '../layouts/RootLayout'
import { AppLayout } from '../layouts/AppLayout'
import HabitList from '../components/habit/HabitList'
import { NewHabit } from '../components/habit/NewHabit'
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
    <RootLayout>
      <AppLayout>{home}</AppLayout>
    </RootLayout>
  )
}
