import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="inner-container">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <h2>Top Stories</h2>
    </div>
  </StyledHeader>
)

const StyledHeader = styled.header`
  background: #ff6600;
  margin-bottom: 1.45rem;

  .inner-container {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;

    h1 {
      margin: 0;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
