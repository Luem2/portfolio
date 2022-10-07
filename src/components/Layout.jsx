import React from 'react';
import Head from 'next/head';
import { Box } from './Box';

export function Layout({ children, pageTitle, pageDescription }) {
  return (
    <>
      <Head>
        <title>{`Luciano Piñol - ${pageTitle || 'Portfolio'}`}</title>
        <meta name='description' content={pageDescription} />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Box
        css={{
          maxW: '100%',
          fontFamily: '$sans',
          fontWeight: '$bold',
        }}
      >
        {children}
      </Box>
    </>
  );
}
