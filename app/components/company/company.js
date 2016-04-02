import React from 'react'
import classnames from 'classnames'
import styles from './company.styl'
import graph from 'assets/img/graph-green-lrg.svg'

class Company extends React.Component {
  constructor(props) {
    super(props)
    this.changeGraphTimespan = this.changeGraphTimespan.bind(this)
    this.state = { graphTimespan: '1-day' }
  }

  render() {
    let timespans = ['1 DAY', '1 WEEK', '1 MONTH', '6 MONTHS', '1 YEAR', 'ALL']
    timespans = timespans.map((span, key) => {
      const dataTimespan = span.toLowerCase().replace(' ', '-')
      const className = classnames({
        [styles.graphTimespanActive]: (this.state.graphTimespan === dataTimespan)
      })

      return (
        <a
          key={ key }
          data-timespan={ dataTimespan }
          href="#"
          onClick={ this.changeGraphTimespan }
          className={ className }>
          { span }
        </a>
      )
    })

    return (
      <div className={ styles.container }>
        <header className={ styles.header }>
          <div>
            <h2 className={ styles.price }>$227.75</h2>
            <p><span className={ styles.green }>+5.17 (2.32%)</span> TODAY</p>
            <p>228.30 +0.55 (0.24%) AFTER-HOURS</p>
          </div>
          <div className={ styles.name }>
            <h4 className={ styles.sub }>TSLA</h4>
            <p>Tesla Motors, Inc. | Common Stock</p>
          </div>
        </header>

        <div className={ styles.graph }>
          <img src={ graph } />

          <nav className={ styles.graphTimespan }>
            { timespans }
          </nav>
        </div>

        <div className={ styles.info }>
          <div>
            <h4 className={ styles.sub }>Stats</h4>
            <div className={ styles.stats }>
              <table>
                <tbody>
                  <tr>
                    <td>OPEN</td>
                    <td>215.17</td>
                  </tr>
                  <tr>
                    <td>HIGH</td>
                    <td>228.89</td>
                  </tr>
                  <tr>
                    <td>LOW</td>
                    <td>215.00</td>
                  </tr>
                  <tr>
                    <td>52 WK HIGH</td>
                    <td>286.65</td>
                  </tr>
                  <tr>
                    <td>52 WK LOW</td>
                    <td>141.05</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>VOLUME</td>
                    <td>2.73M</td>
                  </tr>
                  <tr>
                    <td>AVG VOLUME</td>
                    <td>4.33M</td>
                  </tr>
                  <tr>
                    <td>MKT CAP</td>
                    <td>29.25B</td>
                  </tr>
                  <tr>
                    <td>P/E RATIO</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>DIV/YIELD</td>
                    <td>0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className={ styles.sub }>About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br />
            <p><a href="#" className={ styles.green }>SHOW MORE</a></p>
          </div>
        </div>

        <div className={ styles.actions }>
          <button className={ styles.action }>Sell</button>
          <button className={ styles.action }>Buy</button>
        </div>
      </div>
    )
  }

  changeGraphTimespan(e) {
    e.preventDefault()
    const { timespan } = e.target.dataset
    this.setState({ graphTimespan: timespan })
  }
}

export default Company
