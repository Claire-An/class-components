import React, { ReactNode, useContext } from 'react';
import { ThemeContext } from './providers/ThemeProvider';

type Props = {
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={theme === 'dark' ? 'dark' : 'light'}>
        <main className="container">{children}</main>
      </div>
    </>
  );
};

export default Layout;
