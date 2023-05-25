// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onWithdrawAmount = value => {
    const {amount} = this.state
    if (value < amount) {
      this.setState(prevState => ({
        amount: prevState.amount - parseInt(value),
      }))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="withdrawal-card">
          <div className="dp-container">
            <div className="dp">
              <p>S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balnce-container">
            <p className="your-balance">Your Balance</p>
            <p className="amount">
              {amount}
              <br /> <span className="rupees">In Rupees</span>
            </p>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul>
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  denominationItem={eachDenomination}
                  key={eachDenomination.id}
                  withdrawValue={this.onWithdrawAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
