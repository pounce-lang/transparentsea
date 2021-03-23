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
  [] i push i w % push
  i w / floor push push i 1 +] pounce
] 60 times drop] [grid] compose
1 seedrandom
[0 outAt] [outId] compose
[1 inAt] [inShape] compose
[1 outAt] [outShape] compose
[2 inAt] [inX] compose
[2 outAt] [outX] compose
[3 inAt] [inY] compose
[3 outAt] [outY] compose
[4 inAt] [inW] compose
[4 outAt] [outW] compose
[5 inAt] [inH] compose
[5 outAt] [outH] compose
[6 inAt] [inColor] compose
[6 outAt] [outColor] compose
[[outX padding * xOffset + inX 
  outY padding * yOffset + inY
  outW padding * inW
  outH padding * inH] map] [scale] compose
            `}
          
          pounceCode={
            `
# generative art! using the pounce programming language
# a grid of shapes 

124 seedrandom

grid
[[40 * 40 +] map 20 push] map
[uncons circle swap cons cons 20 push ] map
[114 circle 60 60 40 50] push
[115 circle 140 60 40 50] push
[116 circle 60 140 40 50] push
[117 circle 140 140 40 50] push
`}
          ></KonvaCanvas>
      </div>
  )
}

export default App
