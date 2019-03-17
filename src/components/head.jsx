import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql, Link} from 'gatsby'

import Img from 'gatsby-image'

import headStyle from './head.module.css'

export default class LayoutTemplate extends React.Component {
  render() {
    const {children} = this.props
    return (
      <div>
        <div className={headStyle.logo}>
          <Link to="/">
            <i className={headStyle.image}></i>
          </Link>
        </div>
        <div className={headStyle.character}>
          <a href="" target="_self" title="หน้าหลัก">
            <div id="randomImage">
              <StaticQuery
                query={graphql`
                  query HeadLogoQuery {
                    allFile(filter: {relativeDirectory: {eq: "images\\character"}}) {
                      edges {
                        node {
                          childImageSharp {
                            fluid(maxWidth: 680, quality: 90) {
                              base64
                              tracedSVG
                              aspectRatio
                              src
                              srcSet
                              srcWebp
                              srcSetWebp
                              sizes
                            }
                          }
                        }
                      }
                    }
                  }
                `}
                render={data => {
                  _.each(data.allFile.edges, edge => {
                    return (
                      <Img fluid={edge.node.childImageSharp.fluid} />
                    )
                  })
                }}
              />
            </div>
          </a>
        </div>
      </div>
    )
  }
}

LayoutTemplate.propTypes = {
  children: PropTypes.array,
}