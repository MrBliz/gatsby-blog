import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from "../utils/typography";

export default ({ data }) => {
  return (
    <div>
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >

            <h3 marginBottom={rhythm(1 / 4)}>
              {node.frontmatter.title}{" "}
              <span color="#BBB">— {node.frontmatter.date}</span>
            </h3>
          </Link>
          <p>
            {node.excerpt}
          </p>

        </div>
      )}
    </div>
  )
}

export const query = graphql`
query IndexQuery {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        timeToRead
        wordCount {
          words 
        }
        excerpt(pruneLength:300)
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
        }
        fields {
          slug
        }
        
      }
    }
  }
}
`
