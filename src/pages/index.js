import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="w-full h-96 bg-hero-image my-12"></section>
    <section className="bg-gray-300 h-96 my-12"></section>
   
   
  </Layout>
)

export default IndexPage
