import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout";
import Content from "../content";

export default props => {
  return (
    <Layout {...props}>
      <Content file={props.data.file} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query DocQuery($id: String) {
    site {
      siteMetadata {
        title
        homeUrl
        sitePath
      }
    }
    file(id: { eq: $id }) {
      id
      relativePath
      sourceInstanceName
      childMarkdownRemark {
        html
        tableOfContents
        internal {
          type
        }
        frontmatter {
          title
          robots
        }
      }
      childMdx {
        body
        tableOfContents
        internal {
          type
        }
        frontmatter {
          title
          robots
        }
      }
    }
  }
`;
