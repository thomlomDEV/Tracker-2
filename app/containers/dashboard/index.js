import React from 'react'
import Sidebar from 'components/sidebar/sidebar'
import styles from './index.styl'

class Dashboard extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <Sidebar />
        { this.props.children }
      </div>
    )
  }
}

export default Dashboard
