/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Img from "gatsby-image"
import SEO from "../components/seo"
const PageTemplate = ({ data }) => (
  <Layout>
     <div className="container">
	<SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <h1>{data.wordpressPage.title}</h1>
    
     <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
   <Img
      sizes={data.wordpressPage.acf.feat_img.localFile.childImageSharp.sizes}
     alt={data.wordpressPage.title}
      style={{ maxWidth: 920, maxHeight: 500, marginBottom: 20}}
    />
  </div>
  </Layout>
)
export default PageTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    acf {
        feat_img {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
	
	}
  }
`