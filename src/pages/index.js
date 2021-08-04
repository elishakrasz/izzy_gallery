import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section style={{
      height: '700px'
    }} className="w-full bg-hero-image w-full bg-cover bg-no-repeat my-12"></section>
    <section className="bg-gray-300 h-96 my-12"></section>
   
   
  </Layout>
)

export default IndexPage
