import { useState, useCallback, useEffect } from 'react';

function PasswordGenerator() {
  const [passwordLen, setPasswordLen] = useState(8);
  const [numberRequired, setNumberRequired] = useState(false);
  const [symbolRequired, setSymbolRequired] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useState(null);

  const generatePassword = useCallback(() => {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberRequired) charset += '0123456789';
    if (symbolRequired) charset += '!@#$%^&*()';

    let newPassword = '';
    for (let i = 0; i < passwordLen; i++) {
      newPassword += charset[Math.floor(Math.random() * charset.length)];
    }
    setPassword(newPassword);
  }, [passwordLen, numberRequired, symbolRequired]);

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  useEffect(()=>{
    generatePassword()
  }, [passwordLen, numberRequired, symbolRequired])

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <div className='border-none rounded-full overflow-auto bg-blue-100 pl-3 w-1/3'>
        <input 
        className='outline-none bg-transparent'
        ref={passwordRef}
        type="text" 
        placeholder='Password'
        value={password}
        readOnly
        />
        <button
        onClick={copyPasswordToClipboard}
        className='px-3 py-1 bg-blue-600 rounded-full text-white font-bold'
        >copy</button>
      </div>
      
      <div className='flex justify-center gap-0.5'>
        <input 
          type="range" 
          min="8" max="50"
          id='len'
          value={passwordLen}
          onChange={(e) => setPasswordLen(e.target.value)}
        />
        <label htmlFor="len">Length : {passwordLen}</label>
        
        <input type="checkbox"
          id='num'
          checked={numberRequired}
          onChange={(e) => setNumberRequired(prev => !prev)}
        />
        <label htmlFor="num">Number</label>

        <input type="checkbox"
          id='sym'
          checked={symbolRequired}
          onChange={(e) => setSymbolRequired(prev => !prev)}
        />
        <label htmlFor="sym">Symbol</label>
      </div>
    </div>
  );
}

export default PasswordGenerator;