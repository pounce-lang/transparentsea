import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { KonvaCanvas } from './KonvaCanvas';

function App() {
  const [src, setSrc] = useState(`
  
  `);

  return (
    <div className="App">
      
          <KonvaCanvas pounceCode={
            `
[400] [w] compose
[400] [h] compose
[80] [startx] compose
[80] [starty] compose
128 seedrandom
[random 5 * 2.5 - +] [crand] compose

[
  [x y s]
  [x 30 + w > 
    [startx y 30 + s] 
    [x 30 crand + y crand s] if-else 
    uncons swap drop x w * y + swap cons] pounce
] [grid] compose
startx starty [0 stripe] 
[[x y s] [s x push y push 20 push 20 push x y s grid] pounce] 45 times
drop drop drop
          `}
            shapes={
              src
            }
          ></KonvaCanvas>
      </div>
  )
}

export default App
