import React from 'react';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Alert } from '../components/Alert';
import { 
  Main,
  Container
} from '../styles/styledComponents';

export const MainLayout = (props) => {
  const title = props.title ? `${props.title} | Simple blog` : 'Simple blog';

  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Test application"/>
		    <meta name="keywords" content="TS,React.js,Redux,Next.js"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <title>{title}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Navbar/>
      <Main>
        <Container>
          <Alert/>
          {props.children}
        </Container>
      </Main>
    </>
  );
};