import { useRouter } from 'next/router'
import React from 'react'
import { HabitDetail } from '../../components//habit/HabitDetail'
import { AppLayout } from '../../layouts/AppLayout'
import RootLayout from '../../layouts/RootLayout'

const HabitDetails = () => {
  const router = useRouter()
  const habitId = router.query.habitId
  return <div>{habitId && <HabitDetail id={habitId} />}</div>
}
HabitDetails.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <AppLayout>{page}</AppLayout>
    </RootLayout>
  )
}

export default HabitDetails
