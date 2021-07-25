import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <ul>
      {data.allMicrocmsNews.edges.map(({ node }) => (
        <li>
          <Link to={`/blog/${node.id}`} >{node.title}</Link>
        </li>
      ))}
    </ul>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsNews {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`
