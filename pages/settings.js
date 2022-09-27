import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Settings() {
  const [data, setData] = useState(null)
  // useEffect(() => {
  //   fetch('http://localhost:3001/auth', {
  //     headers: {
  //       authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  // }, [])
  return <div>setting {JSON.stringify(data)}</div>
}
