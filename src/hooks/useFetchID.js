import { useState, useEffect } from "react"
import axios from "axios"

export default function useFetchID({ range=5, url='' }) {
  const [IDs, setIDs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  
  // get IDs for latest news stories
  useEffect(() => {
    //   async function fetchData() {
      //     const res = await axios.get(url).catch(err => setError(err))
      //     // slice array to get IDs for only the first 10 stories
      //     setIDs(res.data.slice(0, range))
      //   }
      //   fetchData()
      console.log({range, url})
  }, [])
  return { IDs, loading, error }
}
