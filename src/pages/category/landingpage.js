import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div className="common-container">
      <div className="container">
        <p class="headline">landing page</p>
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
    allMicrocmsBlog(filter: {category: {eq: "landing page"}}) {
    edges {
      node {
        id
        category
        title
        blogId
        thumbnail{
					url
        }
      }
    }
  }
  }
`
