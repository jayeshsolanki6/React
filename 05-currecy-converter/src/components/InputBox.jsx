import React from 'react'

const InputBox = ({
    label,
    amount,
    selectCurrency,
    onCurrencyChange,
    onAmountChange,
    currencyOptions = [],
    amountDisabled = false,

}) => {

  return (
    <div className='bg-white p-2 rounded-xl'>
        <div className='flex justify-between pb-3'>
            <h3>{label}</h3>
            <h3>Currency Type</h3>
        </div>
        <div className='flex justify-between'>
            <input 
            className='outline-none'
            readOnly = {amountDisabled}
            type="number"
            min={0}
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
             />
            <select 
            name="currency" 
            value={selectCurrency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            >
                {currencyOptions.map((curr) => {
                    return(
                        <option key={curr} value={curr} >{curr}</option>
                    )
                })}
            </select>
        </div>
    </div>
  )
}

export default InputBox