import React, { createContext, useContext, useState } from 'react';

const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState(1);

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

export const useActiveContext = () => {
  const context = useContext(ActiveContext);
  if (!context) {
    throw new Error(
      'useActiveContext must be used within an ActiveProvider'
    );
  }
  return context;
};