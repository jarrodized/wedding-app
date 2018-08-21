import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <div id='story' className="">
              <h1 className="has-text-weight-bold is-size-2">Our Story</h1>
              <p>Lorem ipsum dolor sit amet, timeam facilis expetendis cu vim, cu porro mollis omnesque vim. Vix elit ubique molestie ne, ex mea minim simul recteque, ad postea convenire consequat has. Pro eu aeterno tincidunt intellegebat, philosophia consectetuer reprehendunt ea sit. Ei accusam voluptatum nam, ex enim referrentur adversarium cum, an illud errem menandri usu. Hinc omittantur persequeris nec eu.

Nec ad mollis interesset. No quo nemore dissentias, mel et vidit dicunt accumsan. Iisque senserit democritum in sit, apeirian repudiandae eam ex. Semper intellegam his eu, has tale etiam ceteros an.

Cu probo vivendum mea, qui ea zril graeci salutatus. Choro detraxit qui ex, at cum posse admodum. Mea prima neglegentur id, mea ludus graeco debitis ne, ad alterum accusata evertitur quo. Nostrum postulant has te, pro ex purto option constituam. Omittam epicurei et ius, qui ei dolorem delectus.

His et justo partem ponderum. Eu tollit utroque singulis cum. Ne audire albucius vivendum mea. Aliquip eruditi est id, ut nulla aliquid vituperata vis. Eam everti nostrum platonem et, ei incorrupte consequuntur duo, error graeco vulputate nec an. Id persecuti disputationi mei, mel id natum omnes. Ad cum alterum labores, vis quot nominati deseruisse te.
</p>
            </div>
            <div id='destination' className="">
              <h1 className="has-text-weight-bold is-size-2">Destination</h1>
              <p>Lorem ipsum dolor sit amet, timeam facilis expetendis cu vim, cu porro mollis omnesque vim. Vix elit ubique molestie ne, ex mea minim simul recteque, ad postea convenire consequat has. Pro eu aeterno tincidunt intellegebat, philosophia consectetuer reprehendunt ea sit. Ei accusam voluptatum nam, ex enim referrentur adversarium cum, an illud errem menandri usu. Hinc omittantur persequeris nec eu.

Nec ad mollis interesset. No quo nemore dissentias, mel et vidit dicunt accumsan. Iisque senserit democritum in sit, apeirian repudiandae eam ex. Semper intellegam his eu, has tale etiam ceteros an.

Cu probo vivendum mea, qui ea zril graeci salutatus. Choro detraxit qui ex, at cum posse admodum. Mea prima neglegentur id, mea ludus graeco debitis ne, ad alterum accusata evertitur quo. Nostrum postulant has te, pro ex purto option constituam. Omittam epicurei et ius, qui ei dolorem delectus.

His et justo partem ponderum. Eu tollit utroque singulis cum. Ne audire albucius vivendum mea. Aliquip eruditi est id, ut nulla aliquid vituperata vis. Eam everti nostrum platonem et, ei incorrupte consequuntur duo, error graeco vulputate nec an. Id persecuti disputationi mei, mel id natum omnes. Ad cum alterum labores, vis quot nominati deseruisse te.
</p>
            </div>
            <div id='lodging' className="">
              <h1 className="has-text-weight-bold is-size-2">Lodging</h1>
              <p>Lorem ipsum dolor sit amet, timeam facilis expetendis cu vim, cu porro mollis omnesque vim. Vix elit ubique molestie ne, ex mea minim simul recteque, ad postea convenire consequat has. Pro eu aeterno tincidunt intellegebat, philosophia consectetuer reprehendunt ea sit. Ei accusam voluptatum nam, ex enim referrentur adversarium cum, an illud errem menandri usu. Hinc omittantur persequeris nec eu.

Nec ad mollis interesset. No quo nemore dissentias, mel et vidit dicunt accumsan. Iisque senserit democritum in sit, apeirian repudiandae eam ex. Semper intellegam his eu, has tale etiam ceteros an.

Cu probo vivendum mea, qui ea zril graeci salutatus. Choro detraxit qui ex, at cum posse admodum. Mea prima neglegentur id, mea ludus graeco debitis ne, ad alterum accusata evertitur quo. Nostrum postulant has te, pro ex purto option constituam. Omittam epicurei et ius, qui ei dolorem delectus.

His et justo partem ponderum. Eu tollit utroque singulis cum. Ne audire albucius vivendum mea. Aliquip eruditi est id, ut nulla aliquid vituperata vis. Eam everti nostrum platonem et, ei incorrupte consequuntur duo, error graeco vulputate nec an. Id persecuti disputationi mei, mel id natum omnes. Ad cum alterum labores, vis quot nominati deseruisse te.
</p>
            </div>
            
            <div id='registry' className="">
              <h1 className="has-text-weight-bold is-size-2">Registry</h1>
              <p>Lorem ipsum dolor sit amet, timeam facilis expetendis cu vim, cu porro mollis omnesque vim. Vix elit ubique molestie ne, ex mea minim simul recteque, ad postea convenire consequat has. Pro eu aeterno tincidunt intellegebat, philosophia consectetuer reprehendunt ea sit. Ei accusam voluptatum nam, ex enim referrentur adversarium cum, an illud errem menandri usu. Hinc omittantur persequeris nec eu.

Nec ad mollis interesset. No quo nemore dissentias, mel et vidit dicunt accumsan. Iisque senserit democritum in sit, apeirian repudiandae eam ex. Semper intellegam his eu, has tale etiam ceteros an.

Cu probo vivendum mea, qui ea zril graeci salutatus. Choro detraxit qui ex, at cum posse admodum. Mea prima neglegentur id, mea ludus graeco debitis ne, ad alterum accusata evertitur quo. Nostrum postulant has te, pro ex purto option constituam. Omittam epicurei et ius, qui ei dolorem delectus.

His et justo partem ponderum. Eu tollit utroque singulis cum. Ne audire albucius vivendum mea. Aliquip eruditi est id, ut nulla aliquid vituperata vis. Eam everti nostrum platonem et, ei incorrupte consequuntur duo, error graeco vulputate nec an. Id persecuti disputationi mei, mel id natum omnes. Ad cum alterum labores, vis quot nominati deseruisse te.
</p>
            </div>
            
            
          </div> 
        </div>
      </section>
    )

    // return (
    //   <section className="section">
    //     <div className="container">
    //       <div className="content">
    //         <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
    //       </div>
    //       {posts
    //         .map(({ node: post }) => (
    //           <div
    //             className="content"
    //             style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
    //             key={post.id}
    //           >
    //             <p>
    //               <Link className="has-text-primary" to={post.fields.slug}>
    //                 {post.frontmatter.title}
    //               </Link>
    //               <span> &bull; </span>
    //               <small>{post.frontmatter.date}</small>
    //             </p>
    //             <p>
    //               {post.excerpt}
    //               <br />
    //               <br />
    //               <Link className="button is-small" to={post.fields.slug}>
    //                 Keep Reading →
    //               </Link>
    //             </p>
    //           </div>
    //         ))}
    //     </div>
    //   </section>
    // )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

