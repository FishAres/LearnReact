import React from "react";

export default function useEffectOnUpdate(callbackFun, deps) {
  const firstRender = React.useRef(true);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      callbackFun();
    }
  }, deps);
}
