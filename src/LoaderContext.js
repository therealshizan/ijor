import React, { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export function useLoader() {
  return useContext(LoaderContext);
}

export function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

export default LoaderContext;