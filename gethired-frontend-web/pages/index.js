import Head from 'next/head';
import React from 'react';
import Router from 'next/router';
import LandingPage from '../components/Landing';
// auth
import { useUser, isLoading } from '@auth0/nextjs-auth0';
import { MainSkeleton } from '../components/MainSkeleton';

export default function Landing() {
  const { user } = useUser();
  if (user) {
    Router.push('/home');
  }

  return (
    <section className="Main__wrapper">
      <Head>
        <title>Get Hired | Code tracker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isLoading ? (
        <MainSkeleton />
      ) : (
        <LandingPage />
      )}
    </section>
  );
}
