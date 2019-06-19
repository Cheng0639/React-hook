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
  font-size: 1.5rem;
  h1 {
    color: #f8f8f8;
  }
  button {
    font-size: 1.25rem;
  }
`;

const useRefAsProperty = () => {
  const [count, setCount] = React.useState(0);
  const prevCounterRef = React.useRef();
  React.useEffect(() => {
    prevCounterRef.current = count;
  });
  return (
    <Container>
      <h1>Now: {count}</h1>
      <h1>Before: {prevCounterRef.current}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Click to add 1</button>
    </Container>
  );
};

export default useRefAsProperty;
