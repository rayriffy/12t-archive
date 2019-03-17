import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

import Head from './head'
import Menu from './menu'

import layoutStyle from './layout.module.css'

export default class LayoutTemplate extends React.Component {
  render() {
    const {children} = this.props
    return (
      <div className={layoutStyle.wrap}>
        <div className={layoutStyle.container}>
          <Head />
          <div className={layoutStyle.body}>
            <div className={layoutStyle.blogbanner}>
              <Menu />
              <div className={layoutStyle.clear} />
            </div>
            <div className={layoutStyle.clear} />
          </div>
        </div>
      </div>
    )
  }
}

LayoutTemplate.propTypes = {
  children: PropTypes.array,
}