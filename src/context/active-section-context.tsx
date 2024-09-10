"use client";
import React, { useState, createContext, useContext } from "react";

export const ActiveSectionContext = createContext<any>(null);

export default function ActiveSectionContextProvider({
  children,
}: any) {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);    // when user clicks a link in header/navbar then in between many sections may be visible, in order to avoid setting each one as active for very short period of time, `timeOfLastClick` is being used

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
