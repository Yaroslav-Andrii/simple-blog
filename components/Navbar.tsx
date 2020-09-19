import React from 'react';
import Link from 'next/link';
import { 
  Container,
  Navigation,
  Anchor
} from '../styles/styledComponents';

export const Navbar: React.FC = () => {
  return (
    <>
      <Navigation>
        <Container>
          <Link href="/"><Anchor>LATEST POSTS</Anchor></Link>
          <Link href="/posts/new"><Anchor>CREATE POST</Anchor></Link>
        </Container>
      </Navigation>
    </>
  );
};