import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { KonvaCanvas } from './KonvaCanvas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <KonvaCanvas pounceCode={
          `
          [uncons uncons pop 
            [id shape xy w] 
            [shape square == [xy [w 2 / +] map] [xy] if-else] pounce
          ] [get-xy] compose
          [stack-copy [get-xy] map
          [concat] map2
          [[l-1 stripe] swap concat] map
          uncons uncons uncons 
          #[] [uncons drop] reduce uncons
          ] 
           [make-stripes] compose 
          make-stripes 
          `}
          shapes={
            `
            [c-1 circle 100 200 20] [s-1 square 200 100 40]
            [c-2 circle 100 210 20] [s-2 square 210 100 40]
            [c-3 circle 100 220 20] [s-3 square 220 100 40]
            `
          }
        ></KonvaCanvas>
      </header>
    </div>
  )
}

export default App
