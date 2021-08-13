import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <ul style={{
      display: `flex`,
      flexWrap: `wrap`,
      gap: `56px 3.5%`
    }}>
      {data.allMicrocmsBlog.edges.map(({ node }) => (
        <li style={{
          width: `30%`,
        }}>
          <Link to={`/blog/${node.blogId}`} >
          <div style={{
            width: `100%`,
            height: `200px`,
            marginBottom: `24px`
          }}
          >
            <img
            src={node.thumbnail.url}
            style={{
              width: `100%`,
              height: `100%`,
              objectFit: `cover`
            }}
            alt="" />
          </div>
            <p>{node.title}</p>
          <span class={`category-label -${node.category}`}>
            {node.category}
          </span>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsBlog {
      edges {
        node {
          title
          id
          blogId
          category
          thumbnail {
            url
          }
        }
      }
    }
  }
`
