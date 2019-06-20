import React from 'react';
import styled from 'styled-components';

import Reducer from './useReducer'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Reducer/>
    </Container>
  );
}

export default App;
