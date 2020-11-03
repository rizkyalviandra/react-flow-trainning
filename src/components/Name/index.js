// @flow

import * as React from "react";

type Props = {
  name: string,
};

const Name = (props: Props): React.Element<*> => {
  const { name } = props;
  return <div>Hi {name}</div>;
};

export default Name;
