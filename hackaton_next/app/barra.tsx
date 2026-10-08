'use client';

import { useState } from 'react';

export default function Barra() {
  const [value, setValue] = useState(0);

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    let num = Number(e.target.value);
    if (num < 0) num = 0;
    if (num > 100) num = 100;
    setValue(num);
  }

  return (
    <div>
      <h1>Progress bar</h1>

      <div style={{ background: 'gray', width: '300px' }}>
        <div style={{ background: 'red', width: value + '%' }}>{value}%</div>
      </div>

      <p>Input Percentage:</p>
      <input
        type="number"
        value={value}
        onChange={change}
        style={{ background: 'white', color: 'black' }}
      />
    </div>
  );
}