import { FC, PropsWithChildren } from 'react';

export const T: FC<PropsWithChildren> = ({ children }) => {
  console.log('T', children);
  return <h3>{children}*C</h3>;
};
