import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import Ketubot from "../components/Ketubot"
import Gallery from "../components/Gallery"
import Video from "../components/Video"

const IndexPage = ({ data }) => (
  <Layout className="">
    <Seo title="Home" />
    <section className="px-4" style={{
        
    }}>
      <div >
      <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    </section>
   

    <section className="px-4 py-4 flex" style={{
      height: '400px'
    }}>
      <div className="w-1/2 p-3">
        <Ketubot />
      </div>
      <div className="w-1/2 p-3">
        <Gallery/>
      </div>
    </section>

    <section className="px-4 py-4 flex" style={{
      marginTop:"300px"
    }}>
      <div className="w-1/2 p-3 ml-24">
        <Video videoSrcURL="https://www.youtube.com/embed/ES2YNCM5HPk?controls=0" videoTitle="Hebrew Calligraphy Demonstration" />
      </div>
      <div className="w-1/2 p-3">
      <Video videoSrcURL="https://www.youtube.com/embed/q4oWHGmNMZk?controls=0" videoTitle="Writing Ahavah" />
      </div>
    </section>
   
   
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "cover/lhitchadesh.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
