'use client';
import { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

interface Props {
  children: ReactNode;
  session: Session | null;
}

export const NextAuthProvider: FC<Props> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
