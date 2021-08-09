import React, { useState } from "react"
import styled from "styled-components"
import getDateSincePost from "../utils/getDateSincePost"
import SubCommentList from "./SubCommentList"

export default function Comment({ commentData }) {
  const [showReplies, setShowReplies] = useState(false)
  const { by, text, time, kids } = commentData
  return (
    <CommentContainer className="comment-container">
      <p className="comment-author">
        <strong>{by}</strong>
      </p>
      <div
        className="comment-text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div className="comment-bottom">
        <p className="comment-time">{getDateSincePost(time)}</p>
        {kids && (
          <button onClick={() => setShowReplies(!showReplies)}>
            {`${showReplies ? "Hide" : "View"} Replies`}
          </button>
        )}
      </div>
      {showReplies && <SubCommentList ids={kids} showReplies={showReplies} />}
    </CommentContainer>
  )
}

const CommentContainer = styled.div`
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
`
