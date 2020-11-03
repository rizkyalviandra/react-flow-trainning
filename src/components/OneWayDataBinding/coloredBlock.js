// @flow

import * as React from "react";
import ChangeColorButton from "./changeColorButton";

const ColoredBlock = (): React.Element<*> => {
  const [color, setColor] = React.useState<string>("red");

  const randomColor = (): Function => {
    let letters: string = "0123456789ABCDEF";
    let color: string = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColor = (): Function => {
    setColor(randomColor());
  };

  return (
    <div style={{ height: "200px", width: "200px", backgroundColor: color }}>
      <ChangeColorButton clickHandler={changeColor} />
    </div>
  );
};

export default ColoredBlock;
