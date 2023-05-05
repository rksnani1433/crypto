// Write your JS code here
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoItem} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoItem
  return (
    <div className="item-container">
      <div className="logo-name-container">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="name">{currencyName}</p>
      </div>
      <div className="values-container">
        <p className="name"> {usdValue}</p>
        <p className="name">{euroValue}</p>
      </div>
    </div>
  )
}
export default CryptocurrenciesList
