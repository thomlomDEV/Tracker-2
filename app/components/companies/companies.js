import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import styles from './companies.styl'
import graphUp from 'assets/img/graph-green.svg'
import graphDown from 'assets/img/graph-red.svg'

class Companies extends React.Component {
  render() {
    const companies = this.props.companies.map((company, key) => {
      const className = classnames(styles.company, {
        [styles.companyActive]: (company === this.props.current)
      })

      return (
        <div
          key={ key }
          className={ className }
          onClick={ this.props.onSelect.bind(null, key) }
          >
          <div className={ styles.companyName }>
            <h3>{ company.name }</h3>
            <h5>{ company.shares } SHARES</h5>
          </div>

          <img
            className={ styles.graph }
            src={ company.status === 'up' ? graphUp : graphDown }
            />

          <span
            className={ company.status === 'up' ? styles.priceUp : styles.priceDown }
            >
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
