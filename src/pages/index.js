import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
   <div className="container">
	<SEO title="Forside" keywords={[`gatsby`, `application`, `react`]} />
    <ul style={{ listStyle: "none" }}>
      {data.allWordpressPage.edges.map(page => (
        <li style={{ padding: "40px 0", borderBottom: "1px solid #ccc" }}>
          <Link
            to={`${page.node.slug}`}
            style={{ display: "flex", color: "black", textDecoration: "none" }}
          >
            <Img
              sizes={page.node.acf.feat_img.localFile.childImageSharp.sizes}
              alt={page.node.title}
              style={{ width: "25%", marginRight: 20 }}
            />
            <div style={{ width: "75%" }}>
              <h3
                dangerouslySetInnerHTML={{ __html: page.node.title }}
                style={{ marginBottom: 10, color:"#0078d7" }}
              />
              
              <div dangerouslySetInnerHTML={{ __html: page.node.excerpt }} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  </Layout>
)
export default IndexPage
export const query = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          title
          excerpt
          slug
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
          acf {
            feat_img {
              localFile {
                childImageSharp {
                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

