import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <main className="container">{children}</main>;
};

export default Layout;
