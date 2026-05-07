import React, {useEffect, useState} from 'react'
import InputBox from './components/InputBox'
const App = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("INR")
  const [toCurrency, setToCurrency] = useState("USD")

  const [currencyInfo, setCurrencyInfo] = useState({})

  useEffect(()=>{
    const getData = async () => {
      const data = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      const jsonData = await data.json();
      console.log(jsonData["rates"]);
      setCurrencyInfo(jsonData["rates"]);
    }
    getData();
  }, [fromCurrency])
  
  useEffect(() => {
    if (!currencyInfo[toCurrency]) {
      return;
    }
    const convertedAmount = Number(fromAmount) * currencyInfo[toCurrency];
    setToAmount(convertedAmount);
  }, [fromAmount, toCurrency, currencyInfo])

  const swap = () => {
    setFromAmount(toAmount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <main className='bg-gray-700 w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col w-96 h-60 bg-amber-100 border rounded-2xl border-none p-4'>
        <InputBox 
        label={"From"} 
        amount={fromAmount}
        selectCurrency = {fromCurrency}
        onCurrencyChange={setFromCurrency}
        onAmountChange={setFromAmount}
        currencyOptions={Object.keys(currencyInfo)}
        />

        <button 
        className='cursor-pointer bg-gray-300 border border-none rounded-xl px-4 py-1.5 m-2'
        onClick={swap}
        >
          Swap
        </button>

        <InputBox 
        label={"To"}
        amount={toAmount}
        selectCurrency={toCurrency}
        onCurrencyChange={setToCurrency}
        currencyOptions={Object.keys(currencyInfo)}
        amountDisabled={true}
        />
  
      </div>
    </main>
  )
}

export default App