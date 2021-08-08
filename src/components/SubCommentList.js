import React, { useEffect, useState } from "react"
import fetchByID from "../api/fetchByID"
import getDateSincePost from "../utils/getDateSincePost"
import styled from "styled-components"
import ClipLoader from 'react-spinners/ClipLoader'

export default function SubCommentList({ ids, showReplies }) {
  const [loading, setLoading] = useState(false)
  const [latestComments, setLatestComments] = useState([])

  async function getLatestComments(idList) {
    console.log({ idList })
    if (idList) {
      // get only top 3 comments
      const topThreeComments = await ids.slice(0, 3)
      const comments = await fetchByID(topThreeComments)
      setLatestComments(comments)
    } else {
      setLatestComments([])
    }
  }

  useEffect(() => {
    setLoading(true)
    if (showReplies) {
      getLatestComments(ids)
    }
  }, [showReplies])

  useEffect(() => {
    setLoading(false)
  }, [latestComments])

  if(loading){
      return <ClipLoader />
  }

  if (!ids) {
    return <div></div>
  }

  return (
    latestComments &&
    latestComments.map(comment => (
      <CommentContainer>
        <strong className="comment-author">{comment.data.by}</strong>
        <div
          className="comment-text"
          dangerouslySetInnerHTML={{ __html: comment.data.text }}
        />
        <p className="comment-time">{getDateSincePost(comment.data.time)}</p>
      </CommentContainer>
    ))
  )
}

const CommentContainer = styled.div`
  font-size: 0.8rem;
  margin-left: 2rem;
  border-left: 1px solid #888;

  .comment-author, .comment-time {
      padding-left: 1rem;
  }

  .comment-text {
      padding-left: 1rem;
  }

  .comment-time {
    margin-bottom: 2rem;
  }
`
