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
[7 inAt] [inAlpha] compose
[7 outAt] [outAlpha] compose
[[outX padding * xOffset + inX 
  outY padding * yOffset + inY
  outW padding * inW
  outH padding * inH] map] [scale] compose
            `}
          
            pounceCode="logo four"
            pounceCodeOpts={
                { "sixty grid":
            `
# generative art! using the pounce programming language
# a grid of shapes 
12 seedrandom
grid
[uncons [50 * 110 +] map 20 push cons] map
[uncons circle swap cons cons 20 push] map
[114 circle 335 50 - 335 50 - 50] play [] cons cons cons cons cons push
[115 circle 135 235 50] push
[116 circle 235 135 50] push
[117 circle 135 135 50] push
`,
"logo one":
`
# logo 1
[  120 10  600 "#bee"
  [r  pad sz color] 
  [ []
    [0 rect 0 pad 0 0 color 1]
    pad r + inX 
    sz r - inW sz r - inH push
    [1 circle 0 0 r r color 1]
    pad r + inX pad r + inY push
    [2 circle 0 0 r r color 1]
    pad r + inX pad sz + r - inY push
    [3 circle 0 0 r r color 1]
    pad sz + r - inX pad sz + r - inY push
    [4 rect pad 0 0 0 color 1]
    pad r + inY r 1.1 * inW sz r 2 * - inH push
    [5 rect 0 0 0 0 color 1]
    pad r + inX pad sz + r 1.1 * - inY sz r 2 * - inW r 1.1 * inH push
  ] pounce
] [bg] compose

[[20 circle 170 360 70 0 "#006" 1]] [head] compose

[110 100 160 10 40 "#006" [x w h r1 r2 color] [[]
  [should0 rect x 0 w h color 1]
  610 h - inY push
  [should1 circle x 460 r1 0 color 1]
  610 h - r1 + inY push
  [sh-triangle1 linear x 0 [-6 -6 -30 120 100 100] 0.2 color 1]
  610 h - r1 + inY push
  [should2 circle 240 490 r2 0 color 1]
  x w + inX 610 h - r2 + inY push
  [sh-triangle2 linear 0 0 [0.2 -5 -140 10 -50 120 30 120] 0 color 1]
  x w + r2 + inX 610 h - r2 + inY push
] pounce] [shoulders] compose

[  330 180 240 200 0.2 "#0cc" 0.8
  [x    y   w   h  t color alpha] 
  [ []
    [wow linear x y [] t color alpha]
    [0 0 w 0] 
    w 0.98 * push h 0.95 * push
    -60 push h push
    -60 push h push
    -10 push h 0.8 * push 4 inAt
    push
  ] pounce
] [voice-bubble] compose

[370 320 180 115 [x y w h] [
  [laptop linear x y [] 0.1 "#888" 0.8]
  [0 0 w 0 w h h w -50 w 0 h] h w - 8 inAt
  inW] pounce] [laptop] compose

# thou-0 370 320 180 115 0.5 "#555" 0.5 thought-bubble 
[[key x y w h tension c a] [
  [key linear x y [0 0 w 0 w h 0 h] tension c a]
] pounce] [thought-bubble] compose
  
  [] bg concat head push shoulders concat
voice-bubble concat laptop push
[thou-0 circle 130 255 18 0 "#555" 0.5] push
thou-1 100 150 60 60 0.48 "#f55" 0.5 thought-bubble push
thou-2 163 50 100 90 0.46 "#35f" 0.5 thought-bubble push
thou-3 300 90 180 120 0.3 "#f00" 0.5 thought-bubble push
thou-4 350 200 200 140 0.2 "#86f" 0.7 thought-bubble push
thou-5 390 340 144 80 0.15 "#f66" 0.3 thought-bubble push
`
,
"logo two":
`
# logo 2
[  120 10  600 "#bee"
  [r  pad sz color] 
  [ []
    [0 rect 0 pad 0 0 color 1]
    pad r + inX 
    sz r - inW sz r - inH push
    [1 circle 0 0 r r color 1]
    pad r + inX pad r + inY push
    [2 circle 0 0 r r color 1]
    pad r + inX pad sz + r - inY push
    [3 circle 0 0 r r color 1]
    pad sz + r - inX pad sz + r - inY push
    [4 rect pad 0 0 0 color 1]
    pad r + inY r 1.1 * inW sz r 2 * - inH push
    [5 rect 0 0 0 0 color 1]
    pad r + inX pad sz + r 1.1 * - inY sz r 2 * - inW r 1.1 * inH push
  ] pounce
] [bg] compose

[[20 circle 170 360 70 0 "#006" 1]] [head] compose

[110 100 160 10 40 "#006" [x w h r1 r2 color] [[]
  [should0 rect x 0 w h color 1]
  610 h - inY push
  [should1 circle x 460 r1 0 color 1]
  610 h - r1 + inY push
  [sh-triangle1 linear x 0 [-6 -6 -30 120 100 100] 0.2 color 1]
  610 h - r1 + inY push
  [should2 circle 240 490 r2 0 color 1]
  x w + inX 610 h - r2 + inY push
  [sh-triangle2 linear 0 0 [0.2 -5 -140 10 -50 120 30 120] 0 color 1]
  x w + r2 + inX 610 h - r2 + inY push
] pounce] [shoulders] compose

[  330 180 240 200 0.2 "#0cc" 0.8
  [x    y   w   h  t color alpha] 
  [ []
    [wow linear x y [] t color alpha]
    [0 0 w 0] 
    w 0.98 * push h 0.95 * push
    -60 push h push
    -60 push h push
    -10 push h 0.8 * push 4 inAt
    push
  ] pounce
] [voice-bubble] compose
    
[370 320 180 115 [x y w h] [
  [laptop linear x y [] 0.1 "#888" 0.8]
  [0 0 w 0 w h h w -50 w 0 h] h w - 8 inAt
  inW] pounce] [laptop] compose

# thou-0 370 320 180 115 0.5 "#555" 0.5 thought-bubble 
[[key x y w h tension c a] [
  [key linear x y [0 0 w 0 w h 0 h] tension c a]
] pounce] [thought-bubble] compose
  
[] bg concat head push shoulders concat
thou-3 300 90 180 120 0.3 "#f00" 0.5 thought-bubble push

voice-bubble concat laptop push
[thou-0 circle 130 255 18 0 "#555" 0.5] push
thou-1 100 150 60 60 0.48 "#f55" 0.5 thought-bubble push
thou-2 163 50 100 90 0.46 "#35f" 0.5 thought-bubble push

[thou-v0 circle 360 255 18 0 "#55f" 0.5] push
[thou-v1 circle 400 255 18 0 "#55f" 0.5] push
[thou-v2 circle 370 295 18 0 "#55f" 0.5] push
[thou-v3 circle 440 285 24 0 "#55f" 0.5] push
[thou-v4 circle 500 265 28 0 "#55f" 0.5] push
[thou-v5 circle 520 215 24 0 "#55f" 0.5] push
[thou-v10 circle 390 215 18 0 "#55f" 0.5] push
[thou-v11 circle 470 205 18 0 "#55f" 0.5] push
[thou-v12 circle 460 345 18 0 "#55f" 0.5] push
[thou-v13 circle 540 325 24 0 "#55f" 0.5] push
[thou-v14 circle 500 390 28 0 "#55f" 0.5] push
[thou-v15 circle 420 380 24 0 "#55f" 0.5] push

thou-5 390 340 144 80 0.15 "#f66" 0.3 thought-bubble push`
,
"logo three":
`
# logo 3
[  120 10  600 "#bee"
  [r  pad sz color] 
  [ []
    [0 rect 0 pad 0 0 color 1]
    pad r + inX 
    sz r - inW sz r - inH push
    [1 circle 0 0 r r color 1]
    pad r + inX pad r + inY push
    [2 circle 0 0 r r color 1]
    pad r + inX pad sz + r - inY push
    [3 circle 0 0 r r color 1]
    pad sz + r - inX pad sz + r - inY push
    [4 rect pad 0 0 0 color 1]
    pad r + inY r 1.1 * inW sz r 2 * - inH push
    [5 rect 0 0 0 0 color 1]
    pad r + inX pad sz + r 1.1 * - inY sz r 2 * - inW r 1.1 * inH push
  ] pounce
] [bg] compose

[[20 circle 170 360 70 0 "#006" 1]] [head] compose

[110 100 160 10 40 "#006" [x w h r1 r2 color] [[]
  [should0 rect x 0 w h color 1]
  610 h - inY push
  [should1 circle x 460 r1 0 color 1]
  610 h - r1 + inY push
  [sh-triangle1 linear x 0 [-6 -6 -30 120 100 100] 0.2 color 1]
  610 h - r1 + inY push
  [should2 circle 240 490 r2 0 color 1]
  x w + inX 610 h - r2 + inY push
  [sh-triangle2 linear 0 0 [0.2 -5 -140 10 -50 120 30 120] 0 color 1]
  x w + r2 + inX 610 h - r2 + inY push
] pounce] [shoulders] compose

[  330 180 240 200 0.2 "#0cc" 01.8
  [x    y   w   h  t color alpha] 
  [ []
    [wow linear x y [] t color alpha]
    [0 0 w 0] 
    w 0.98 * push h 0.95 * push
    -60 push h push
    -60 push h push
    -10 push h 0.8 * push 4 inAt
    push
  ] pounce
] [voice-bubble] compose
    
[360 350 180 115 [x y w h] [
  [laptop linear x y [] 0.1 "#999" 1]
  [0 0 w 0 w h h w -50 w 0 h] h w - 8 inAt
  inW] pounce] [laptop] compose

# example thou-0 370 320 180 115 0.5 "#555" 0.5 thought-bubble 
[[key x y w h tension c a] [
  [key linear x y [0 0 w 0 w h 0 h] tension c a]
] pounce] [thought-bubble] compose
  
[] bg concat head push shoulders concat
[thou-0 circle 130 266 18 0 "#555" 0.5] push
[thou-1 circle 130 190 40 0 "seagreen" 0.7] push
[thou-2 circle 208 95  60 0 "#35f" 0.5] push
[thou-3 circle 377 150 90 0 "#f00" 0.5] push

voice-bubble concat 

[thou-v2  circle 370 295 30 0 "seagreen" 0.6] push
[thou-v4  circle 520 250 34 0 "#97f" 0.7] push
[thou-v10 circle 398 220 37 0 "#55f" 0.5] push
[thou-v13 circle 460 320 43 0 "#f55" 0.8] push


laptop push

laptop-screen 377 363 152 88 0.15 "#fff" 0.5 thought-bubble push

[thou-v14 circle 495 420 28 0 "seagreen" 0.6] push
[thou-v15 circle 410 410 24 0 "#57f" 0.7] push
[thou-v12 circle 452 380 18 0 "#55f" 0.5] push
`
,
"logo four":
`
# logo 4
[  120 10  600 "#bee"
  [r  pad sz color] 
  [ []
    [0 rect 0 pad 0 0 color 1]
    pad r + inX 
    sz r - inW sz r - inH push
    [1 circle 0 0 r r color 1]
    pad r + inX pad r + inY push
    [2 circle 0 0 r r color 1]
    pad r + inX pad sz + r - inY push
    [3 circle 0 0 r r color 1]
    pad sz + r - inX pad sz + r - inY push
    [4 rect pad 0 0 0 color 1]
    pad r + inY r 1.1 * inW sz r 2 * - inH push
    [5 rect 0 0 0 0 color 1]
    pad r + inX pad sz + r 1.1 * - inY sz r 2 * - inW r 1.1 * inH push
  ] pounce
] [bg] compose

[[20 circle 170 360 70 0 "#006" 1]] [head] compose

[110 100 160 10 40 "#006" [x w h r1 r2 color] [[]
  [should0 rect x 0 w h color 1]
  610 h - inY push
  [should1 circle x 460 r1 0 color 1]
  610 h - r1 + inY push
  [sh-triangle1 linear x 0 [-6 -6 -30 120 100 100] 0.2 color 1]
  610 h - r1 + inY push
  [should2 circle 240 490 r2 0 color 1]
  x w + inX 610 h - r2 + inY push
  [sh-triangle2 linear 0 0 [0.2 -5 -140 10 -50 120 30 120] 0 color 1]
  x w + r2 + inX 610 h - r2 + inY push
] pounce] [shoulders] compose

[  330 180 240 200 0.2 "#0cc" 01.8
  [x    y   w   h  t color alpha] 
  [ []
    [wow linear x y [] t color alpha]
    [0 0 w 0] 
    w 0.98 * push h 0.95 * push
    -60 push h push
    -60 push h push
    -10 push h 0.8 * push 4 inAt
    push
  ] pounce
] [voice-bubble] compose
    
[360 350 180 115 [x y w h] [
  [laptop linear x y [] 0.1 "#999" 1]
  [0 0 w 0 w h h w -50 w 0 h] h w - 8 inAt
  inW] pounce] [laptop] compose

# example thou-0 370 320 180 115 0.5 "#555" 0.5 thought-bubble 
[[key x y w h tension c a] [
  [key linear x y [0 0 w 0 w h 0 h] tension c a]
] pounce] [thought-bubble] compose
  
[] bg concat head push shoulders concat
[thou-0 circle 130 266 18 0 "#555" 0.5] push
[thou-1 circle 130 190 40 0 "seagreen" 0.7] push
[thou-2 circle 208 95  60 0 "#35f" 0.5] push
[thou-3 circle 377 150 90 0 "#f00" 0.5] push

voice-bubble concat 

[thou-v2  circle 370 295 30 0 "seagreen" 0.6] push
[thou-v4  circle 520 250 34 0 "#97f" 0.7] push
[thou-v10 circle 398 220 37 0 "#55f" 0.5] push
[thou-v13 circle 460 320 43 0 "#f55" 0.8] push


laptop push

laptop-screen 377 363 152 88 0.15 "#fff" 0.5 thought-bubble push

[thou-v14 circle 495 420 28 0 "seagreen" 0.6] push
[thou-v15 circle 410 410 24 0 "#57f" 0.7] push
[thou-v12 circle 452 380 18 0 "#55f" 0.5] push
`
}
}
          ></KonvaCanvas>
      </div>
  )
}

export default App

//     [wow linear x y [0 0 100 0 100 100 -40 100 -7 80] 0.2 red 0.3]
// [  320 180 240 200 50 "#4e4" 0.5
//   [x y w h r color alpha] 
//   [ []
//     [vb0 rect 0 0 0 0 color alpha]
//     x r + inX y r + inY 
//     w r 2 * - inW h r 2 * - inH push
//     [vb1 circle 0 0 r r color alpha]
//     x r + inX y r + inY push
//     [vb2 circle 0 0 r r color alpha]
//     x r - w + inX y r + inY push
//     [vb3 circle 0 0 r r color alpha]
//     x r - w + inX y r - h + inY push
//     [vb4 linear x 0 [0 0 r r -60 r] 0 color alpha]
//     y r - h + inY push
//     [vbr1 rect x 0 0 0 color alpha]
//     y r + inY r 1.1 * inW h r 2 * - inH push
//     [vbr2 rect 0 y 0 0 color alpha]
//     x r + inX w r 2 * - inW r 1.1 * inH push
//     [vbr3 rect 0 0 0 0 color alpha]
//     x r 1.1 * - w + inX 
//     y r + inY 
//     r 1.1 * inW 
//     h r 2 * - inH push
//     [vbr4 rect x 0 0 0 color alpha]
//     y r 1.1 * - h + inY 
//     w r - inW 
//     r 1.1 * inH push
//   ] pounce
// ] [voice-bubble] compose
