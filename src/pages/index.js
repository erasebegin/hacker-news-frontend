import React, { useEffect, useState } from "react"
import fetchIDs from "../api/fetchIDs"
import fetchStories from "../api/fetchByID"
import StoryCard from "../components/StoryCard"
import ClipLoader from "react-spinners/ClipLoader"

import Layout from "../components/layout"

const IndexPage = () => {
  const [latestIDs, setLatestIDs] = useState([])
  const [latestStories, setLatestStories] = useState([])
  const [loading, setLoading] = useState(true)

  async function getLatestIDs() {
    const ids = await fetchIDs(
      10,
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    )

    setLatestIDs(ids)
  }
  async function getLatestStories(ids) {
    const stories = await fetchStories(ids)
    setLatestStories(stories)
  }

  useEffect(() => {
    getLatestIDs()
  }, [])
  
  useEffect(() => {
    getLatestStories(latestIDs)
  }, [latestIDs])
  
  useEffect(() => {
    setLoading(false)
  }, [latestStories])

  return (
    <Layout>
      {loading ? (
        <ClipLoader />
      ) : (
        latestStories.map(story => (
          <StoryCard key={story.data.id} data={story.data} />
        ))
      )}
    </Layout>
  )
}

export default IndexPage
