import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { KonvaCanvas } from './KonvaCanvas';

function App() {


  return (
    <div className="App">
      
          <KonvaCanvas 
            preambleCode={`
[10] [w] compose
[6] [h] compose
[40] [xOffset] compose
[40] [yOffset] compose
[30] [padding] compose
[random 20 * 10 - +] [rnd] compose
[dup dup random * [2 /] dip swap - +] [rnd0] compose
[[v] [v random v 20 / * v 40 / - +] pounce] [rnd*] compose
[
  [] 0 [ [i] [
  [] i w % padding * xOffset + push
  i w / floor padding * yOffset + push push i 1 +] pounce
] 60 times drop] [grid] compose
1 seedrandom
            `}
          
          pounceCode={
            `
# generative art! using the pounce programming language
# a grid of shapes 

124 seedrandom

grid
[
  [xy]
  [[rect] xy [20 20 ] concat [rnd] map concat]
  pounce
] map
`}
          ></KonvaCanvas>
      </div>
  )
}

export default App
