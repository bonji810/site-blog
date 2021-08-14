import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={data.microcmsBlog.title} />
    <div className="article-container">
      <div className="container">
        <div className="head">
          <h1 class="title">{data.microcmsBlog.title}</h1>
          <p class="time">{data.microcmsBlog.createdAt}</p>
          <p class={`category-label -${data.microcmsBlog.category}`}>{data.microcmsBlog.category}</p>
        </div>
        <Link className="thumbnail" to={`${data.microcmsBlog.link}`} target="_blank" >
          <div className="image">
            <img src={`${data.microcmsBlog.thumbnail.url}`} alt="" className="img" />
          </div>
          <span className="text">Visit Site</span>
        </Link>
        <div
          class="body"
          dangerouslySetInnerHTML={{
            __html: `${data.microcmsBlog.body}`,
          }}
        />
      <Link className="return" to={`/`}>
        Back to Home
      </Link>
      </div>
    </div>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      link
      body
      category
      createdAt(formatString:"YYYY/MM/DD")
      thumbnail {
        url
      }
    }
  }
`