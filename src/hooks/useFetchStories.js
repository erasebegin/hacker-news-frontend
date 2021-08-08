import { useState, useEffect } from "react"
import axios from "axios"

export default function useFetchStories({ ids }) {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

//   if (ids) {
//     async function getArticle(id) {
//       const article = await axios.get(
//         `https://hacker-news.firebaseio.com/v0/item/${id}`
//       )
//       setStories([...stories, article])
//     }

//     //   const lala = ids.map(id => getArticle(id))

//     console.log({ ids })
//     return { stories, loading, error }
//   }
}
