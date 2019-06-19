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
  const [title, setTitle] = React.useState(() => document.title);
  const [name, setName] = React.useState('Avicii');
  React.useEffect(() => {
    console.log('run effect');
    document.title = title;
  });
  // }, [title]);
  return (
    <Div>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <input value={name} onChange={e => setName(e.target.value)} />
    </Div>
  );
};

export default TitleInputer;
