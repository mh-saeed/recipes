import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Seo = ({ title, description }) => {
  const {
    site: { siteMetadata: data },
  } = useStaticQuery(query)

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${data.title}`}
      meta={[
        {
          name: `description`,
          content: description ? description : data.description,
        },
      ]}
    ></Helmet>
  )
}

export default Seo
