import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  background: #282c34;
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  padding: 2rem;
  border-radius: 2rem;
`;

const Button = styled.button`
  flex-grow: 1;
  font-size: 3rem;
  border-radius: 2rem;
`;

const Displayer = styled.span`
  color: #f0f0f0;
  text-align: center;
  font-size: 5rem;
  flex-grow: 2;
`;

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <Container>
      <Button className="minus" onClick={() => setCount(prev => prev - 1)}>
        -
      </Button>
      <Displayer>{count}</Displayer>
      <Button className="plus" onClick={() => setCount(prev => prev + 1)}>
        +
      </Button>
    </Container>
  );
};

export default Counter;
