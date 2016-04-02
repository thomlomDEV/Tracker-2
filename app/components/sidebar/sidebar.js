import React from 'react'
import { Link } from 'react-router'
import styles from './sidebar.styl'
import logoWhite from 'assets/img/logo-white.png'

class Sidebar extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <Link to="/" className={ styles.logoContainer }>
          <img className={ styles.logo } src={ logoWhite } />
        </Link>

        <div className={ styles.subcontainer }>
          <div className={ styles.total }>
            <h5>PORTFOLIO TOTAL:</h5>
            <h2>$356,077.32</h2>
          </div>

          <ul className={ styles.nav }>
            <li>
              <a href="#" className={ styles.active }>My Stocks</a>
              <div className={ styles.badge }>22</div>
            </li>
            <li>
              <a href="#">Buy Stocks</a>
            </li>
            <li>
              <a href="#">Pending Orders</a>
            </li>
            <li>
              <a href="#">Insights</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
          </ul>
        </div>

        <a href="#" className={ styles.avatarContainer }>
          <div className={ styles.avatar }>
            <img src="http://www.gravatar.com/avatar/a5ae3b1de9f4a4ea33137563cf2e0c78" />
          </div>
          <h3>jsonmaur</h3>
          <i className="fa fa-caret-up" />
        </a>
      </div>
    )
  }
}

export default Sidebar
