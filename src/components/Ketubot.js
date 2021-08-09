import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Ketubot = () => {

    
const data = useStaticQuery(graphql`
query {
  file(relativePath: { eq: "cover/wild.jpg" }) {
    childImageSharp {
      fluid {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
}
`)
    return (
        <div style={{
            margin: 'auto',
            padding: "10%",
            width:"80%"
        }}>
            <Img fluid={data.file.childImageSharp.fluid} />
        </div>
    )
}


// export const query = graphql`
//   query {
//     file(relativePath: {eq: "cover/narrow_bridge.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fluid(maxWidth: 950) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

export default Ketubot