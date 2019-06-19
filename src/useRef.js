import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #535353;
  border-radius: 5px;
  font-size: 3rem;
  input {
    font-size: 2rem;
  }
  button {
    font-size: 1.75rem;
  }
`;

const Ref = () => {
  const ref = React.useRef();
  return (
    <Container>
      <input ref={ref} value="HelloInput1" readOnly />
      <input value="HelloInput2" readOnly />
      <button onClick={() => ref.current.focus()}>Focus on first input</button>
    </Container>
  );
};

export default Ref;
