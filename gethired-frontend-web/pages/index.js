import Head from 'next/head';
import React from 'react';
import Router from "next/router";
// auth
import { useUser } from '@auth0/nextjs-auth0';

export default function Landing() {
  const { user } = useUser();
  if(user){
    Router.push("/home")
  }

  return(
    <section className="Main__wrapper">
      <Head>
        <title>Get Hired | Code tracker</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>

      <h2>Hi there, I am the landing page</h2>
    </section>
  )
}
