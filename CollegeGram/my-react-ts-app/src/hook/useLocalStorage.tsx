import { useState } from "react";

// Generic type <T> allows this hook to be used with any data type
export const useLocalStorage = <T,>(keyName: string, defaultValue: T): [T, (newValue: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value) as T;
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      console.error(`Error getting item from localStorage: ${err}`);
      return defaultValue;
    }
  });

  const setValue = (newValue: T) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.error(`Error setting item in localStorage: ${err}`);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
