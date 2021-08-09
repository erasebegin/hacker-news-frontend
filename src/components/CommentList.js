import React from "react"
import ClipLoader from "react-spinners/ClipLoader"
import styled from "styled-components"
import Comment from './Comment';

export default function CommentList({ data, loading }) {

  if (loading) {
    return (
      <Loader>
        <ClipLoader />
      </Loader>
    )
  }

  if (data.length < 1) {
    return <Loader>No comments</Loader>
  }

  return (
    <CommentListContainer>
      {data.map(comment => (
        <Comment commentData={comment.data}/>
      ))}
    </CommentListContainer>
  )
}

const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const CommentListContainer = styled.div`
  padding: 1rem;
`
