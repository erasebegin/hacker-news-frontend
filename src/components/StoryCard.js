import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { AiFillHeart } from "react-icons/ai"
import fetchByID from "../api/fetchByID"
import CommentList from "./CommentList"
import getDateSincePost from "../utils/getDateSincePost"

export default function StoryCard({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [latestComments, setLatestComments] = useState([])

  async function getLatestComments(ids) {
    if (ids) {
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
    if (isOpen) {
      getLatestComments(data.kids)
    }
  }, [isOpen])

  useEffect(() => {
    setLoading(false)
  }, [latestComments])

  if (!data) {
    return <div></div>
  }

  return (
    <CardContainer $isOpen={isOpen}>
      <div className="main-section">
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          <h3>{data.title}</h3>
        </a>
        <div className="main-section-bottom">
          <p className="story-time" format="DD-MM-YYYY">
            {getDateSincePost(data.time)}
          </p>
          <div className="likes">
            <AiFillHeart />
            <p>{data.score}</p>
          </div>
        </div>
      </div>
      <div className="accordion-section">
        <CommentList loading={loading} data={latestComments} />
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>{`${
        isOpen ? "Hide" : "Show"
      } Comments`}</button>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  padding: 1rem;
  box-shadow: 0px 0px 10px 0px #ebebeb99;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
  position: relative;
  color: #999;

  .main-section {
    a {
      color: #555;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      h3 {
        margin-right: 2rem;
        margin-bottom: 0.75rem;
      }
    }
  }

  .main-section-bottom {
    display: flex;
    justify-content: space-between;

    .story-time {
        margin-bottom: 0;
    }

    .likes {
      position: absolute;
      top: 0;
      right: 0;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      svg {
        color: #ff6600;
      }
    }
  }

  .accordion-section {
    max-height: ${props => (props.$isOpen ? "70vh" : "0px")};
    overflow-y: scroll;
  }

  button {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    background: #ff6600;
    border: none;
    border-radius: 5px;
    padding: 0.2rem 0.8rem;
    margin-top: 0.5rem;
    color: white;
    cursor: pointer;
  }
`
