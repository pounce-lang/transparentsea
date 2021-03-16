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
  switch (coords[1]) {
    case 'square':
      return <Rect
        x={coords[2]}
        y={coords[3]}
        width={coords[4]}
        height={coords[4]}
        fill="blue"
        opacity={0.3}
      />;
      break;
    case 'circle':
      return <Circle
        x={coords[2]}
        y={coords[3]}
        radius={coords[4]}
        fill="blue"
        opacity={0.3}
      />;
      break;
    case 'rect':
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

const pounceOn = (precode: string, code: string) => {
  try {
    const cat = interpreter(precode + " " + code);
    const retval = cat.next()?.value;
    return retval? retval?.stack: [];
  } catch (e) {
    console.error(e);
    return [];
  }
};


export const KonvaCanvas = (props: any) => {
  const [code, setCode] = useState(props.pounceCode);
  const canvasCmds = pounceOn(props.preambleCode, code);
  
  const shapes: [] = typeof canvasCmds[0] === 'object'? canvasCmds[0] as []: [];

  return (<div className="parent">
    <div className="div1"><h2>sixty</h2></div>
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
            shapes.map((coordinate: any, i: any) => paintElement([i, ...coordinate]))
          }
        </Layer>
      </Stage>
    </div>
  </div>
  );
};