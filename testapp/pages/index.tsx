import { useState } from 'react';

import * as React from 'react';
const Example = ({ inertia = false }): React.ReactNode => {
    const [counter, setCounter] = useState(0);
    
    const incCounter = () => setCounter(prev => prev + 1);
  return (
    <div className="flex flex-col gap-y-4 p-2">
      <h1 className="text-blue-800 text-4xl">D.I.R.T Stack Tutorial</h1>
      <div className="bg-blue-100 border-blue-800 border-2 flex flex-col p-4 rounded">
        <p className="text-blue-800 text-lg">The D.I.R.T Stack consists of 4 major pieces</p>
      </div>
      <ul className="text-2xl">
        <li><span className="font-semibold">D</span>Ahmed</li>
        <li><span className="font-semibold">I</span>Gamal</li>
        <li><span className="font-semibold">R</span>Shaheen</li>
        <li><span className="font-semibold">T</span>FArouk CSS</li>
      </ul>
      <p>
            Hello from Svelte!
            <span style={{ color: 'transparent' }}>
                <span className="text-blue-500">and Tailwind!</span>
            </span>
            {inertia && <span>and Inertia!</span>}
            <button onClick={incCounter}>Counter: {counter}</button>
         </p>
    </div>
  )
}

export default Example;
