import React from "react"
import Layout from "../component/Layout"
import SEO from "../component/SEO"
const Error = () => {
  return (
    <Layout>
      <SEO title={"404 Page Not Found | Simple Recipe"} />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error
