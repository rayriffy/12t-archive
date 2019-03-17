import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql, Link} from 'gatsby'

import Img from 'gatsby-image'

import headStyle from './head.module.css'

export default class LayoutTemplate extends React.Component {
  render() {
    return (
      <StaticQuery
      query={graphql`
        query HeadComponentQuery {
          file(relativePath: {eq: "images/logo/12tlogo.png"}) {
            childImageSharp {
              fluid(maxWidth: 480, quality: 90) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
          allFile(filter: {relativePath: {regex: "/(images/character)/"}}) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 680, quality: 90) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className={headStyle.head}>
          <div className={headStyle.logo}>
            <Link to="/">
              <Img fluid={data.file.childImageSharp.fluid} className={headStyle.image} />
            </Link>
          </div>
          <div className={headStyle.character}>
            <a href="" target="_self" title="หน้าหลัก">
              <div id="randomImage">
                <Img fluid={data.allFile.edges[Math.floor(Math.random() * data.allFile.edges.length)].node.childImageSharp.fluid} />
              </div>
            </a>
          </div>
        </div>
      )}
    />
    )
  }
}

LayoutTemplate.propTypes = {
  children: PropTypes.array,
}