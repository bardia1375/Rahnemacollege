

import React, { createContext, useState, ReactNode } from 'react';

interface MyContextType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider = ({ children }: MyProviderProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
