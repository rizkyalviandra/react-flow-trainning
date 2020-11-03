// @flow

import * as React from "react";

type Props = {
  clickHandler: Function,
};

const ChangeColorButton = (props: Props): React.Element<*> => {
  const { clickHandler } = props;
  const handleClick = (): Function => {
    clickHandler();
    console.log("clicked");
  };

  return <button onClick={handleClick}>Change The Color</button>;
};

export default ChangeColorButton;
