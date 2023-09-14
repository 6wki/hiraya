"use client";

import { Next13ProgressBar } from "next13-progressbar";

const NProgressComponent = () => {
  return (
    <Next13ProgressBar
      height="4px"
      color="#FC2947"
      options={{ showSpinner: false }}
      showOnShallow
    />
  );
};

export default NProgressComponent;
