import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface Props {
  children?: ReactNode;
}

interface ContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = React.createContext<ContextType>({
  theme: 'light',
  setTheme: () => {},
});

const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('currentTheme') || 'light',
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
