// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, withdrawValue} = props
  const {value} = denominationItem
  const onWithdrawValue = () => {
    withdrawValue(value)
  }

  return (
    <li>
      <button type="button" onClick={onWithdrawValue}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
