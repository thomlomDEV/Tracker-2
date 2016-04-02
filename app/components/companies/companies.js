import React from 'react'
import classnames from 'classnames'
import styles from './companies.styl'

class Companies extends React.Component {
  render() {
    let companies = [
      { name: 'APPL', shares: '120', price: '$105.67', status: 'up' },
      { name: 'FB', shares: '110', price: '$113.05', status: 'up' },
      { name: 'TWTR', shares: '80', price: '$15.91', status: 'down' },
      { name: 'TSLA', shares: '75', price: '$227.75', status: 'up' },
      { name: 'NFLX', shares: '50', price: '$98.36', status: 'down' },
      { name: 'F', shares: '50', price: '$13.06', status: 'down' },
      { name: 'DIS', shares: '15', price: '$97.22', status: 'up' },
      { name: 'GPRO', shares: '10', price: '$12.42', status: 'up' },
      { name: 'FIT', shares: '10', price: '$14.58', status: 'up' },
      { name: 'BABA', shares: '5', price: '$75.86', status: 'down' }
    ]

    companies = companies.map((company, key) => {
      const classname = classnames(styles.company, {
        [styles.companyActive]: (key === 2)
      })

      return (
        <div key={ key } className={ classname }>
          <div className={ styles.companyName }>
            <h3>{ company.name }</h3>
            <h5>{ company.shares } SHARES</h5>
          </div>

          <span className={ company.status === 'up' ? styles.priceUp : styles.priceDown }>
            { company.price }
          </span>
        </div>
      )
    })

    return (
      <div className={ styles.container }>
        <div className={ styles.search }>
          <input className={ styles.search } type="text" placeholder="Search by stock or market name" />
          <i className="fa fa-search"></i>
        </div>

        <nav className={ styles.companies }>
          { companies }
        </nav>
      </div>
    )
  }
}

export default Companies
