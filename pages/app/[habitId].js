import { useRouter } from 'next/router'
import React from 'react'
import { HabitDetail } from '../../components/HabitDetail'
import { AppLayout } from '../../layouts/AppLayout'
import Layout from '../../layouts/Layout'

const HabitDetails = () => {
  const router = useRouter()
  const habitId = router.query.habitId
  return <div>{habitId ? <HabitDetail id={habitId} /> : <></>}</div>
}
HabitDetails.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AppLayout>{page}</AppLayout>
    </Layout>
  )
}

export default HabitDetails
