import React from 'react'
import Companies from 'components/companies/companies'
import Company from 'components/company/company'
import styles from './index.styl'

class Stocks extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <Companies />
        <Company />
      </div>
    )
  }
}

export default Stocks
