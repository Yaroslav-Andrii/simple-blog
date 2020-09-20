import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hideAlert } from '../store/actions';
import { Container, AlertContainer } from '../styles/styledComponents';

import IAlert from '../interfaces/IAlert';
import IState from '../interfaces/IState';

export const Alert = () => {
  const alert: IAlert = useSelector((state: IState) => {
    return state.alertState;
  });

  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch( hideAlert() );
  }

  const alertTemplate = (
    <Container>
      <AlertContainer 
        className={alert.status ? alert.status : ''}
      >
        <p>
          <b>{alert.title}</b> 
          {alert.text}
        </p>
        <button onClick={handleClick}>&times;</button>
      </AlertContainer>
    </Container>
  );

  return (alert.title && alert.text) ? alertTemplate : null;
};