'use client'
import React, { useState } from 'react';

const bcrypt = require('bcryptjs');

function Test() {
    const [password, setPassword] = useState('');
    const [hashedPassword, setHashedPassword] = useState('');
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    const handleHashPassword = async () => {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      setHashedPassword(hash);
    };
  
    return (
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
        />
        <button onClick={handleHashPassword}>Hash Password</button>
        <div>
          <p>Hashed Password:</p>
          <textarea
            readOnly
            value={hashedPassword}
            placeholder="Hashed password will be displayed here"
          />
        </div>
      </div>
    );
}

export default Test