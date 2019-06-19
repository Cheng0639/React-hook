import React from 'react';
import styled from 'styled-components';

import Counter from './Counter';

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
      <Counter />
    </Container>
  );
}

export default App;
