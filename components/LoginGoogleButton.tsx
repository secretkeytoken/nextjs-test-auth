'use client';
import React, { useCallback } from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';

type Props = {};

const LoginGoogleButton: React.FC<Props> = ({}) => {
  const loginWithGoogle = () =>
    signIn('google', { callbackUrl: 'http://localhost:3000/admin' });

  return <Button onClick={loginWithGoogle}>Login with google</Button>;
};

export default LoginGoogleButton;
