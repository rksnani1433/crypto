import {Component} from 'react'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="header">CryptocurrencyTracker</h1>
        <img
          className="crypto-image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
        />
        <CryptocurrenciesList />
      </div>
    )
  }
}
export default CryptocurrencyTracker
