import {async} from 'rxjs'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {blogData: []}

  componentDidMount() {
    this.getBlogs()
  }

  getBlogs = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updated = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    console.log(updated)
    this.setState({blogData: updated})
  }

  render() {
    const {blogData} = this.state

    return (
      <div className="blog-container">
        <div className="nav-items">
          <p className="options">Coin Type</p>
          <div className="inner-options">
            <p className="options">USD</p>
            <p className="options">EURO</p>
          </div>
        </div>
        <ul>
          {blogData.map(each => (
            <CryptocurrencyItem key={each.id} cryptoItem={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default CryptocurrenciesList
