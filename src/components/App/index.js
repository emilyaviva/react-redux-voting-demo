import React from 'react';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../../store';
import Voter from '../Voter';
import AddCandidate from '../AddCandidate';

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <h1>Vote!</h1>
        <Voter />
        <AddCandidate />
      </Container>
    </Provider>
  );
}

export default App;
