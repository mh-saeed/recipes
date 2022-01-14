import React from "react"
import Layout from "../component/Layout"
import AllRecipes from "../component/AllRecipes"
const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
