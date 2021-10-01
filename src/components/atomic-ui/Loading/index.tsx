import React from "react";

import ids from "../../../shared/test-ids.json";

const Loading: React.FC = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border text-primary mt-5"
        data-testid={ids.loading}
      ></div>
    </div>
  );
};

export default Loading;
