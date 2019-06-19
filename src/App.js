import React from 'react';
import styled from 'styled-components';

import TitleInputer from './TitleInputer';

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
      <TitleInputer />
    </Container>
  );
}

export default App;
