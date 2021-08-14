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
        <div className="title">
          <div className="main-title">
            <h1 className="main">Bowwwards.com</h1>
            <p className="sub">自己流サイト分析＆まとめ。</p>
          </div>
        </div>
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
