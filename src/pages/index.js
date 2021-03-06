import React from "react"
import Layout from "../component/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../component/AllRecipes"
import Seo from "../component/SEO"

export default function Home() {
  return (
    <Layout>
      <Seo title={"Home"} />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simple recipes</h1>
              <h4>no fluff, just recipes </h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
