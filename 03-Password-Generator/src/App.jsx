import { useState, useCallback } from 'react';

function PasswordGenerator() {
  const [passwordLen, setPasswordLen] = useState(8);
  const [numberRequired, setNumberRequired] = useState(false);
  const [symbolRequired, setSymbolRequired] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberRequired) charset += '0123456789';
    if (symbolRequired) charset += '!@#$%^&*()';

    let newPassword = '';
    for (let i = 0; i < passwordLen; i++) {
      newPassword += charset[Math.floor(Math.random() * charset.length)];
    }
    setPassword(newPassword);
  }, [passwordLen, numberRequired, symbolRequired]); // dependencies

  return (
    <div>
      <p>Password: {password}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={generatePassword}>
        Generate
      </button>

      <input type="range" min="8" max="50"
        value={passwordLen}
        onChange={(e) => setPasswordLen(Number(e.target.value))}
      />

      <input type="checkbox"
        checked={numberRequired}
        onChange={(e) => setNumberRequired(e.target.checked)}
      />

      <input type="checkbox"
        checked={symbolRequired}
        onChange={(e) => setSymbolRequired(e.target.checked)}
      />
    </div>
  );
}

export default PasswordGenerator;