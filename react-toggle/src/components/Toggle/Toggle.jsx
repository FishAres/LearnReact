import React from "react";
import useToggle from "../../hooks/useToggle";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";
const ToggleContext = React.createContext();

export default function Toggle({ children, onToggle = () => {} }) {
  const [on, toggle] = useToggle();

  useEffectOnUpdate(onToggle, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
