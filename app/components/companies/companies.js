import React from 'react'
import classnames from 'classnames'
import styles from './companies.styl'

class Companies extends React.Component {
  render() {
    let stocks = [
      { name: 'APPL', shares: '120', price: '$105.67', status: 'up' },
      { name: 'FB', shares: '110', price: '$113.05', status: 'up' },
      { name: 'TWTR', shares: '80', price: '$15.91', status: 'down' }
    ]

    stocks = stocks.map((stock, key) => {
      return <li key={ key }>{ stock.name }</li>
    })

    return (
      <div className={ styles.container }>
        <div className={ styles.search }>
          <input className={ styles.search } type="text" placeholder="Search by stock or market name" />
          <i className="fa fa-search"></i>
        </div>

        <ul className={ styles.stocks }>
          { stocks }
        </ul>
      </div>
    )
  }
}

export default Companies
