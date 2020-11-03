// @flow

import * as React from "react";

const HandleEvent = (): React.Element<*> => {
  const handleClick = (event): Function => {
    alert(event);
  };

  return <button onClick={handleClick}>click me</button>;
};

export default HandleEvent;
