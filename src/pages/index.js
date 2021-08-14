import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <div className="common-container">
      <div className="container">
        <ul className="list">
          {data.allMicrocmsBlog.edges.map(({ node }) => (
            <li className="card-container">
              <Link className="container" to={`/blog/${node.blogId}`} >
              <div className="image"
              >
                <img
                src={node.thumbnail.url}
                className="img"
                alt="" />
              </div>
              <p class="title">{node.title}</p>
              <span class={`category-label -${node.category}`}>
                {node.category}
              </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
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
