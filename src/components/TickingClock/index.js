//@flow

import * as React from "react";

const TickingClock = (): React.Element<*> => {
  const [time, setTime] = React.useState<string>(new Date().toLocaleString());

  React.useEffect(() => {
    const intervalID = setInterval(() => {
      tick();
    }, 1000);

    const cleanInterval = (): Function => {
      cleanInterval();
    };
  });

  const tick = () => {
    setTime(new Date().toLocaleString());
  };

  return (
    <div>
      <p>The Time is {time}</p>
    </div>
  );
};

export default TickingClock;
