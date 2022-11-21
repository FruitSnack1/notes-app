import { useQuery } from '@tanstack/react-query'
import { getHabits } from '../../api/habit.api'
import { AppLayout } from '../../layouts/AppLayout'
import RootLayout from '../../layouts/RootLayout'

export default function Graph() {
  const numberOfDays = 31
  const { isLoading, error, data } = useQuery(['habits'], getHabits)

  return isLoading ? (
    <p>loading</p>
  ) : (
    <>
      <h3 className='fw-bold'>Graph</h3>
      <table>
        {data.data.map((e, i) => (
          <>
            <tr key={i}>
              <td>{e.title}</td>
              {new Array(numberOfDays).fill(0).map((e, i) => (
                <td className='border' key={i}></td>
              ))}
            </tr>
          </>
        ))}
        <tr>
          <td></td>
          {new Array(numberOfDays).fill(0).map((e, i) => (
            <td key={i}>{i + 1}</td>
          ))}
        </tr>
      </table>
      {/* <div className='row'>
        <div className='col-2'>
          {data.data.map((e, i) => (
            <p className='text-end fw-bold' key={i}>
              {e.title}
            </p>
          ))}
        </div>
        <div className='col-10'>
          <div className='d-flex justify-content-between px-3'>
            {new Array(numberOfDays).fill(0).map((e, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
        </div>
      </div> */}
    </>
  )
}

Graph.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <AppLayout>{page}</AppLayout>
    </RootLayout>
  )
}
