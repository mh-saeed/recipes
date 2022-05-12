import React from "react"
import Layout from "../component/Layout"
import AllRecipes from "../component/AllRecipes"
import Seo from "../component/SEO"
const Recipes = () => {
  return (
    <Layout>
      <Seo title={"Recipes"} />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
