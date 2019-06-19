import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  input {
    width: 75vw;
    padding: 1rem;
    background: #aaaaaa;
    border: '3px solid #535353';
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
`;

const TitleInputer = () => {
  const [state, setState] = React.useState(() => document.title);
  React.useEffect(() => {
    document.title = state;
  });
  return (
    <Div>
      <input value={state} onChange={e => setState(e.target.value)} />
    </Div>
  );
};

export default TitleInputer;
