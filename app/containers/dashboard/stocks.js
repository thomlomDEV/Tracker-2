import React from 'react'
import Companies from 'components/companies/companies'
import Company from 'components/company/company'
import styles from './index.styl'

const companies = [
  { name: 'APPL', fullName: 'Apple Inc.', shares: '120', price: '$105.67', status: 'up' },
  { name: 'FB', fullName: 'Facebook Inc', shares: '110', price: '$113.05', status: 'up' },
  { name: 'TWTR', fullName: 'Twitter Inc', shares: '80', price: '$15.91', status: 'down' },
  { name: 'TSLA', fullName: 'Tesla Motors Inc', shares: '75', price: '$227.75', status: 'up' },
  { name: 'NFLX', fullName: 'Netflix, Inc.', shares: '50', price: '$98.36', status: 'down' },
  { name: 'F', fullName: 'Ford Motor Company', shares: '50', price: '$13.06', status: 'down' },
  { name: 'DIS', fullName: 'Walt Disney Co', shares: '15', price: '$97.22', status: 'up' },
  { name: 'GPRO', fullName: 'GoPro Inc', shares: '10', price: '$12.42', status: 'up' },
  { name: 'FIT', fullName: 'Fitbit Inc', shares: '10', price: '$14.58', status: 'up' },
  { name: 'BABA', fullName: 'Alibaba Group Holding Ltd', shares: '5', price: '$75.86', status: 'down' }
]

class Stocks extends React.Component {
  constructor(props) {
    super(props)
    this.selectCompany = this.selectCompany.bind(this)
    this.state = { selected: 0 }
  }

  render() {
    const current = companies[this.state.selected]
    return (
      <div className={ styles.container }>
        <Companies
          companies={ companies }
          current={ current }
          onSelect={ this.selectCompany }
          />

        <Company company={ current } />
      </div>
    )
  }

  selectCompany(key) {
    this.setState({ selected: key })
  }
}

export default Stocks
