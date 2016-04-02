import React from 'react'
import Sidebar from 'components/sidebar/sidebar'
import Companies from 'components/companies/companies'
import Company from 'components/company/company'
import styles from './index.styl'

class Dashboard extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <Sidebar />
        <Companies />
        <Company />
      </div>
    )
  }
}

export default Dashboard
