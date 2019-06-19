import React from 'react';
import styled from 'styled-components';

import Interval from './Interval';

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
      <Interval />
    </Container>
  );
}

export default App;
