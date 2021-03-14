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
# generative art? using the pounce programming language: a grid of random rectangles
[10] [w] compose
[400] [h] compose
[40] [startx] compose
[40] [starty] compose
[60] [sp] compose 
[50] [sz] compose 
128 seedrandom
[random 20 * 10 - +] [rnd] compose
[dup dup random * [2 /] dip swap - +] [rnd0] compose
[[v] [v random v 20 / * v 40 / - +] pounce] [rnd*] compose


[
  [i] [
    i 1 + 
    i w % sp * startx + 
    i w / floor sp * starty +] pounce
] [grid] compose

[stripe] 0  
[[s i] [s i grid] pounce
  [s i x y] 
  [s x rnd push y rnd* push sz rnd0 push sz rnd* push s i] pounce
] 60 times
drop drop
            `}
            shapes={
              src
            }
          ></KonvaCanvas>
      </div>
  )
}

export default App
