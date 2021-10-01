import React from "react";

import ids from "../../../shared/test-ids.json";

interface TextProps {
  name: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ name, className }) => {
  return (
    <span className={className} data-testid={ids.text}>
      {name}
    </span>
  );
};

export default Text;
