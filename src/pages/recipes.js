import React from "react"
import Layout from "../component/Layout"
import AllRecipes from "../component/AllRecipes"
import SEO from "../component/SEO"
const Recipes = () => {
  return (
    <Layout>
      <SEO title={"Recipes"} />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
