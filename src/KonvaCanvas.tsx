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
        // onDragMove={(e: any) => {
        //   const attr = e?.target?.attrs || { x: 0, y: 0 };
        //   console.log(attr);
        //   switch (e?.target?.attrs?.edit) {
        //     case 'x':
        //       adjust([coords[0], coords[1], attr.x, coords[3], coords[4], coords[5]]);
        //       break;
        //     case 'y':
        //       adjust([coords[0], coords[1], coords[2], attr.y, coords[4], coords[5]]);
        //       break;
        //     case 'w':
        //       adjust([coords[0], coords[1], coords[2], coords[3], attr.x - attr.width, coords[5]]);
        //       break;
        //     case 'h':
        //       adjust([coords[0], coords[1], coords[2], coords[3], attr.x - attr.width, coords[5]]);
        //       break;
        //     default:
        //       break;
        //   }
        // }
        // }
        onMouseDown={function (click) {
          const x = click.evt.layerX - click.target.attrs.x;
          const y = click.evt.layerY - click.target.attrs.y;
          console.log(click.target.attrs.width - x, click.target.attrs.height - y);
          if (x < 10) {
            click.target.attrs.edit = "x";
          }
          else if (y < 10) {
            click.target.attrs.edit = "y";
          }
          else if (click.target.attrs.width - x < 10) {
            click.target.attrs.edit = "w";
          }
          else if (click.target.attrs.height - y < 10) {
            click.target.attrs.edit = "h";
          }
        }
        }


      />;
      break;
    default:
  }
};

const pounceOn = (code: any) => {
  const cat = interpreter(code);
  try {
  return cat.next()?.value?.stack || [];
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
    <div className="div1">transparentsea</div>
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
            canvasCmds.filter((e: any) => e[1] === 'stripe')
              .map((coordinate: any, i: any) => paintElement(coordinate))
          }
          {
            canvasCmds.filter((e: any) => e[1] !== 'stripe')
              .map((coordinate: any, i: any) => paintElement(coordinate))
          }
        </Layer>
      </Stage>
    </div>
  </div>
  );
};