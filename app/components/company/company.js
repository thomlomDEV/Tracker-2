import React from 'react'
import classnames from 'classnames'
import styles from './company.styl'
import graphUp from 'assets/img/graph-green-lrg.svg'
import graphDown from 'assets/img/graph-red-lrg.svg'

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

    const wentUp = this.props.company.status === 'up'

    return (
      <div className={ styles.container }>
        <header className={ styles.header }>
          <div>
            <h2 className={ styles.price }>{ this.props.company.price }</h2>
            <p><span className={ wentUp ? styles.green : styles.red }>{ wentUp ? '+' : '-' }5.17 (2.32%)</span> TODAY</p>
            <p>228.30 +0.55 (0.24%) AFTER-HOURS</p>
          </div>
          <div className={ styles.name }>
            <h4 className={ styles.sub }>{ this.props.company.name }</h4>
            <p>{ this.props.company.fullName } | Common Stock</p>
          </div>
        </header>

        <div className={ styles.graph }>
          <img src={ wentUp ? graphUp : graphDown } />

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
                    <td>{ this.randomNumber() }</td>
                  </tr>
                  <tr>
                    <td>HIGH</td>
                    <td>{ this.randomNumber() }</td>
                  </tr>
                  <tr>
                    <td>LOW</td>
                    <td>{ this.randomNumber() }</td>
                  </tr>
                  <tr>
                    <td>52 WK HIGH</td>
                    <td>{ this.randomNumber() }</td>
                  </tr>
                  <tr>
                    <td>52 WK LOW</td>
                    <td>{ this.randomNumber() }</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>VOLUME</td>
                    <td>{ this.randomVolume() }</td>
                  </tr>
                  <tr>
                    <td>AVG VOLUME</td>
                    <td>{ this.randomVolume() }</td>
                  </tr>
                  <tr>
                    <td>MKT CAP</td>
                    <td>{ this.randomVolume() }</td>
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

  randomNumber() {
    return ((Math.random() * 999) + 100).toFixed(2)
  }

  randomVolume() {
    return ((Math.random() * 99) + 10).toFixed(2) + 'M'
  }
}

export default Company
