import { AppLayout } from '../../layouts/AppLayout'
import RootLayout from '../../layouts/RootLayout'

export default function Trash() {
  return <div>trash</div>
}
Trash.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <AppLayout>{page}</AppLayout>
    </RootLayout>
  )
}
