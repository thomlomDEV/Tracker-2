import React from 'react'
import { Link, IndexLink } from 'react-router'
import styles from './sidebar.styl'
import logoWhite from 'assets/img/logo.png'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.openAccountMenu = this.openAccountMenu.bind(this)
  }

  render() {
    const navLink = { activeClassName: styles.active }

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
              <IndexLink to="/" { ...navLink }>My Stocks</IndexLink>
              <div className={ styles.badge }>22</div>
            </li>
            <li>
              <Link to="/buy" { ...navLink }>Buy Stocks</Link>
            </li>
            <li>
              <Link to="/pending" { ...navLink }>Pending Orders</Link>
            </li>
            <li>
              <Link to="/insights" { ...navLink }>Insights</Link>
            </li>
            <li>
              <Link to="/settings" { ...navLink }>Settings</Link>
            </li>
            <li>
              <Link to="/history" { ...navLink }>History</Link>
            </li>
          </ul>
        </div>

        <div className={ styles.avatarContainer } onClick={ this.openAccountMenu }>
          <div className={ styles.avatar }>
            <img src="http://www.gravatar.com/avatar/a5ae3b1de9f4a4ea33137563cf2e0c78" />
          </div>
          <h3>jsonmaur</h3>
          <i className="fa fa-caret-up" />
        </div>
      </div>
    )
  }

  openAccountMenu(e) {
    e.preventDefault()
    alert('hi')
  }
}

export default Sidebar
