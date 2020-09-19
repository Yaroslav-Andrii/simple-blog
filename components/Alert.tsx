import React from 'react';
import { Container, AlertContainer } from '../styles/styledComponents';


export const Alert: React.FC | null = () => {
  const alert = false;

  const alertTemplate = (
    <Container>
      <AlertContainer>
        <p><b>Alert title</b> Alert message</p>
        <button>&times;</button>
      </AlertContainer>
    </Container>
  );

  return alert ? alertTemplate : null;
};