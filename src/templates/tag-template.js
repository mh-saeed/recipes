import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../component/RecipesList"
import Layout from "../component/Layout"
import Seo from "../component/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  // console.log(recipes , pageContext)
  return (
    <Layout>
      <Seo
        title={
          pageContext.tag.charAt(0).toUpperCase() + pageContext.tag.slice(1)
        }
      />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      filter: { content: { tags: { eq: $tag } } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
