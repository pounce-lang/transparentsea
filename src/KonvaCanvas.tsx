import React, { useState } from "react";
import { render } from "react-dom";
import {
  Stage,
  Layer,
  Rect,
  Circle,
  Line,
  Arc
} from 'react-konva';
// import Konva from 'konva';

// Rect, Text, Circle and line as just react compoents
// they are not loaded into Konva namespace

// so we need to import required shapes manually
import "konva/lib/shapes/Rect";
import "konva/lib/shapes/Circle";
import "konva/lib/shapes/Arc";
import { parse, unParse, interpreter } from '@pounce-lang/core';


const paintElement = (coords: any) => {
  if (!coords) {
    return null;
  }
  switch (coords[1]) {
    case 'square':
      return <Rect
        key={coords[0]}
        x={coords[2]}
        y={coords[3]}
        width={coords[4]}
        height={coords[4]}
        fill="blue"
        opacity={0.3}
      />;
    //break;
    case 'circle':
      return <Circle
        key={coords[0]}
        x={coords[2]}
        y={coords[3]}
        radius={coords[4]}
        fill={coords[6] ?? "blue"}
        opacity={coords[7] ?? 0.3}
      />;
    //break;
    case 'rect':
      return <Rect
        key={coords[0]}
        x={coords[2]}
        y={coords[3]}
        width={coords[4]}
        height={coords[5]}
        fill={coords[6] ?? "green"}
        opacity={coords[7] ?? 0.5}
      />;
    case 'arc':
      return <Arc
        key={coords[0]}
        x={coords[2]}
        y={coords[3]}
        innerRadius={coords[4]}
        outerRadius={coords[4]}
        rotation={coords[5]}
        angle={coords[6]}
        // fill="red"
        stroke={coords[7] ?? "black"}
        opacity={coords[8] ?? 0.5}
        strokeWidth={2}
      />;
    //break;
    case 'linear':
      return <Line
        key={coords[0]}
        x={coords[2]}
        y={coords[3]}
        points={coords[4]}
        // points={[0, 0, 100, 0, 100, 100]}
        tension={coords[5]}
        closed
        fill={coords[6] ?? "green"}
        opacity={coords[7] ?? 0.5}
      />;
    //break;
    default:
  }
};

const pounceOn = (precode: string, code: string) => {
  try {
    const cat = interpreter(precode + " " + code);
    const retval = cat.next()?.value;
    return retval ? retval?.stack : [];
  } catch (e) {
    console.log(code);
    console.error(e);
    return [];
  }
};

export const KonvaCanvas = (props: any) => {
  const [codeOpts, setCodeOpts] = useState(props.pounceCodeOpts);
  const [codeKey, setCodeKey] = useState(props.pounceCode);
  const [code, setCode] = useState(codeOpts[codeKey]);

  const canvasCmds = pounceOn(props.preambleCode, code);

  const shapes: [] = typeof canvasCmds[0] === 'object' ? canvasCmds[0] as [] : [];
  const loadPounceProgram = (selected: HTMLCollectionOf<HTMLOptionElement>) => {
    console.log(selected[0].innerText);
    setCodeKey(selected[0].innerText);
    setCode(codeOpts[selected[0].innerText]);
  }

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
      <select
        onChange={(e) => loadPounceProgram(e.target.selectedOptions)}
      >
        <option>sixty grid</option>
        <option selected={true} >sixty arc</option>
        <option>logo one</option>
        <option>logo two</option>
        <option selected={false} >logo three</option>
        <option selected={false} >logo four</option>
      </select>
      <textarea
        rows={20} cols={50}
        wrap="true" value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck="false"
      >
      </textarea>
    </div>
    <div className="div4">
      <Stage style={{ width: 620, height: 620, backgroundColor: "#eee" }}
        width={620} height={620}>
        <Layer>
          {
            shapes.map(e => paintElement(e)) // .map((coordinate: any, i: any) => paintElement([i, ...coordinate]))
          }
        </Layer>
      </Stage>
    </div>
  </div>
  );
};