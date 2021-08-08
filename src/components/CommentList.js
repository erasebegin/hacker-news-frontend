import React, { useState } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import styled from "styled-components"
import getDateSincePost from "../utils/getDateSincePost"
import SubCommentList from "./SubCommentList"

export default function CommentList({ data, loading }) {
  const [showReplies, setShowReplies] = useState(false)

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
        <div className="comment-container">
          <p className="comment-author">
            <strong>{comment.data.by}</strong>
          </p>
          <div
            className="comment-text"
            dangerouslySetInnerHTML={{ __html: comment.data.text }}
          />
          <div className="comment-bottom">
            <p className="comment-time">
              {getDateSincePost(comment.data.time)}
            </p>
            {comment.data.kids && (
              <button onClick={() => setShowReplies(!showReplies)}>
                {`${showReplies ? "Hide" : "View"} Replies`}
              </button>
            )}
          </div>
          {showReplies && (
            <SubCommentList ids={comment.data.kids} showReplies={showReplies} />
          )}
        </div>
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

  .comment-container {

    .comment-author {
      margin-bottom: 0.5rem;
    }

    .comment-text {
      padding-bottom: 0.5rem;

      p:last-child {
        margin-bottom: 0;
      }

      a {
        color: #ff6600;
      }
    }

    .comment-time,
    .comment-author {
      color: #555;
    }

    .comment-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1rem;

      .comment-time {
        margin-bottom: 0;
      }

      button {
        background: none;
        color: #ff6600;
        cursor: pointer;
        padding: 0;
        padding-right: 1rem;
        line-height: 0;
      }
    }
  }
`
