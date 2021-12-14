import React, { useState } from "react";

const useFlip = (initail_state=true) => {
  const [state, setState] = useState(initail_state);
  const flipCard = () => {
    setState(state => !state);
  };
  return [state, flipCard]
}

export default useFlip;
