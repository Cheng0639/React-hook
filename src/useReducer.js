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

function reducer(state, action) {
  switch (action.type) {
    case 'INC':
      return state + action.payload;
    case 'DEC':
      return state - action.payload;
    default:
      return state;
  }
}

const useReducer = () => {
  const [count, dispatch] = React.useReducer(reducer, 0);
  return (
    <Container>
      <Button
        className="minus"
        onClick={() => dispatch({ type: 'DEC', payload: 1 })}
      >
        -
      </Button>
      <Displayer>{count}</Displayer>
      <Button
        className="plus"
        onClick={() => dispatch({ type: 'INC', payload: 3 })}
      >
        +
      </Button>
    </Container>
  );
};

export default useReducer;
