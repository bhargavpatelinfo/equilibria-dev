import React, { createContext, useState, useContext } from "react";
export interface ModalsContextType {
  scrolled: number;
  setScrolled: React.Dispatch<React.SetStateAction<number>>;
}
const initialModalsContext: ModalsContextType = {
  scrolled: 0,
  setScrolled: () => {},
};
const ModalsContext = createContext<ModalsContextType>(initialModalsContext);

export const useModals = () => useContext(ModalsContext);

export const ModalsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scrolled, setScrolled] = React.useState(0);
  return (
    <ModalsContext.Provider
      value={{
        setScrolled,
        scrolled,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
