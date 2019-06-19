import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 40vw;
  height: 30vh;
  background: #535353;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #e8e8e8;

  h2 {
    font-size: 3rem;
  }
`;

const Interval = () => {
  const [count, setCount] = React.useState(0);
  const [duration, setDuration] = React.useState(1000);
  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(prev => prev + 1);
    }, duration);
    return () => {
      clearInterval(id);
    };
  }, [duration, setCount]);
  return (
    <Container>
      <h2>{count}</h2>
      <div>
        <label>Update duration: </label>
        <input value={duration} onChange={e => setDuration(e.target.value)} />
      </div>
    </Container>
  );
};

export default Interval;
