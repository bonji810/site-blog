import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="common-container">
      <div className="container">
        <p class="headline">Categories</p>
        <div className="links-container">
          <div className="container">
          <div className="title">
            <p>Types</p>
          </div>
          <div className="inner">
          <Link
            to="/category/recruit"
            className="link"
          >
            recruit
          </Link>
          <Link
            to="/category/corporate"
            className="link"
          >
            corporate
          </Link>
          <Link
            to="/category/portfolio"
            className="link"
          >
            portfolio
          </Link>
          <Link
            to="/category/landingpage"
            className="link"
          >
            landing page
          </Link>
          <Link
            to="/category/other"
            className="link"
          >
            other
          </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
