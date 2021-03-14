import React, { useState } from "react";
import { render } from "react-dom";
import {
  Stage,
  Layer,
  Rect,
  Circle,
} from 'react-konva';
// import Konva from 'konva';

// Rect, Text, Circle and line as just react compoents
// they are not loaded into Konva namespace

// so we need to import required shapes manually
import "konva/lib/shapes/Rect";
import "konva/lib/shapes/Circle";
import { parse, unParse, interpreter } from '@pounce-lang/core';


const paintElement = (coords: any, color: any = "tan") => {
  // console.log(coords);

  switch (coords[1]) {
    case 'square':
      return <Rect
        x={coords[2]}
        y={coords[3]}
        width={coords[4]}
        height={coords[4]}
        fill="pink"
        shadowBlur={20}
        draggable
        onDragMove={(e: any) => {
          const attr = e?.target?.attrs || { x: 0, y: 0 };
          const newCoords = [coords[0], coords[1], attr.x, attr.y, coords[4]]
          //adjust(newCoords);
        }}
      //onDragEnd
      />;
      break;
    case 'circle':
      return <Circle
        x={coords[2]}
        y={coords[3]}
        radius={coords[4]}
        fill="pink"
        shadowBlur={20}
        draggable
        onDragMove={(e: any) => {
          const attr = e.target.attrs;
          const newCoords = [coords[0], coords[1], attr.x, attr.y, coords[4]]
          // adjust(newCoords);
        }}
      />;
      break;
    case 'stripe':
      return <Rect
       key={coords[0]}
        x={coords[2]}
        y={coords[3]}
        width={coords[4]}
        height={coords[5]}
        fill="blue"
        opacity={0.3}
        draggable
      />;
      break;
    default:
  }
};

const pounceOn = (code: any) => {
  try {
    const cat = interpreter(code);
    const retval = cat.next()?.value;
    return retval? retval?.stack: [];
  } catch (e) {
    console.error(e);
    return [];
  }
};


export const KonvaCanvas = (props: any) => {
  const [code, setCode] = useState(props.pounceCode);
  // console.log("code", code);
  let canvasCmds = pounceOn(code);
  
  if (!canvasCmds) {
    canvasCmds = [];
  }
  

  return (<div className="parent">
    <div className="div1"><h3>transparentsea</h3></div>
    <div className="div2">
      <textarea
        rows={20} cols={50}
        wrap="true" value={unParse(canvasCmds)}
      //  onChange={(e) => setPs(parse(e.target.value))}
        spellCheck="false"
      >
      </textarea>
    </div>
    <div className="div3">
      <textarea
        rows={20} cols={50}
        wrap="true" value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck="false"
      >
      </textarea>
    </div>
    <div className="div4">
      <Stage style={{ width: 670, height: 500, backgroundColor: "#eee" }}
        width={670} height={500}>
        <Layer>
          {
            canvasCmds
              .map((coordinate: any, i: any) => paintElement([i, ...coordinate]))
          }
        </Layer>
      </Stage>
    </div>
  </div>
  );
};