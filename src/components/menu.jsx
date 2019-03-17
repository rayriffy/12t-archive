import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql, Link} from 'gatsby'

import Img from 'gatsby-image'

import menuStyle from './menu.module.css'

export default class LayoutTemplate extends React.Component {
  render() {
    return (
      <div className={menuStyle.menu}>
        <ul id="nav">
          <li className={menuStyle.tabm01}>
            <a href="/newsupdate/allnews" className={menuStyle.m01} target="_self"></a>
            <ul style={{width: '290px', display: 'none'}}>
              <li>
                <span className={menuStyle.istar}></span><a href="/newsupdate/allnews" className={menuStyle.bluetext13} target="_self" title="allnews">ข่าวทั้งหมด</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="/newsupdate/allnews?id=news" className={menuStyle.bluetext13} target="_self" title="news">ข่าวสาร</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="/newsupdate/allnews?id=event" className={menuStyle.bluetext13} target="_self" title="event">กิจกรรม</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="/newsupdate/allnews?id=promotion" className={menuStyle.bluetext13} target="_self" title="promotion">โปรโมชั่น</a>
              </li>
            </ul>
          </li>
          <li className={menuStyle.parade}><img src="/images/parade.jpg" width="2" height="48" /></li>
          <li className={menuStyle.tabm02}>
            <a href="/gameinfo/gameguide/newsmall.html" className={menuStyle.m02} target="_blank"></a>
            <ul style={{width: '420px', display: 'none'}}>
              <li>
                <span className={menuStyle.istar}></span><a href="/gameinfo/story/small_content/story_small.html" className={menuStyle.bluetext13} target="_blank" title="Story">ความเป็นมา</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="/gameinfo/character/newchar.html" className={menuStyle.bluetext13} target="_blank" title="Character">ตัวละคร</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="/beginner/beginer/newbegin.html" className={menuStyle.bluetext13} target="_blank" title="Beginner Guide">คู่มือเริ่มเล่น</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="/gameinfo/gameguide/newsmall.html" className={menuStyle.bluetext13} target="_blank" title="System Guide">ระบบต่างๆ</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="/itemshop/itemshop" className={menuStyle.bluetext13} title="Item Guide">ไอเทมมอลล์</a>
              </li>
            </ul>
          </li>
          <li className={menuStyle.parade}><img src="/images/parade.jpg" width="2" height="48" /></li>
          <li className={menuStyle.tabm03}>
            <a className={menuStyle.m03}></a>
            <ul style={{width: '230px', display: 'none'}}>
              <li>
                <span className={menuStyle.istar}></span><a href="/ranking/rank500?sid=C" className={menuStyle.bluetext13} title="Carronian">Carronian</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="/ranking/rank500?sid=M" className={menuStyle.bluetext13} title="Mupiea">Mupiea</a>
              </li>
            </ul>
          </li>
          <li className={menuStyle.parade}><img src="/images/parade.jpg" width="2" height="48" /></li>
          <li className={menuStyle.tabm04}><a href="http://forum.herorangers.com/" className={menuStyle.m04} target="_blank"></a>
            <ul style={{width: '230px', display: 'none'}}>
              <li>
                <span className={menuStyle.istar}></span><a href="http://forum.herorangers.com/" target="_blank" className={menuStyle.bluetext13} title="Webboard">Webboard</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="http://forum.herorangers.com/index.php?board=9.0" className={menuStyle.bluetext13} target="_self" title="Guild">Guild</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="https://www.facebook.com/HeroRangers" target="_blank" className={menuStyle.bluetext13} title="Facebook">Facebook</a>
              </li>
            </ul>
          </li>
          <li className={menuStyle.parade}><img src="/images/parade.jpg" width="2" height="48" /></li>
          <li className={menuStyle.tabm05}>
            <a href="/download/games/downloadall_12t" className={menuStyle.m05} target="_self"></a>
            <ul style={{width: '230px', display: 'none'}}>
              <li>
                <span className={menuStyle.istar}></span><a href="/download/games/downloadall_12t" className={menuStyle.bluetext13} title="Client">Client</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="/download/games/downloadall_12t" className={menuStyle.bluetext13} title="Manual Patch">Manual Patch</a>
                <span className={menuStyle.istar}></span><a href="/download/media/screenshot" className={menuStyle.bluetext13} title="promotion">Media</a>
              </li>
            </ul>
          </li>
          <li className={menuStyle.parade}><img src="/images/parade.jpg" width="2" height="48" /></li>
          <li className={menuStyle.tabm06}>
            <a href="http://herorangers.com/gm_direct/Login.aspx" className={menuStyle.m06} target="_blank"></a>
            <ul style={{width: '350px', display: 'none', float: 'right'}}>
              <li>
                <span className={menuStyle.istar}></span><a href="/faq/faq_all" className={menuStyle.bluetext13} target="_self" title="FAQ">FAQ</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="/faq/rule" className={menuStyle.bluetext13} target="_self" title="Rules">Rules</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="http://herorangers.com/gm_direct/Login.aspx" className={menuStyle.bluetext13} target="_blank" title="GM Direct">GM Direct</a>&nbsp;
                <span className={menuStyle.istar}></span><a href="http://www.herorangers.com/account_Login/herorangers_login.aspx" className={menuStyle.bluetext13} target="_blank" title="บัญชี HERO Passport">บัญชี HERO Passport</a>&nbsp;
              </li>
            </ul>
          </li>
          <li className={menuStyle.clear}></li>
          <li className={menuStyle.submenu}></li>
        </ul>
      </div>
    )
  }
}

LayoutTemplate.propTypes = {
  children: PropTypes.array,
}