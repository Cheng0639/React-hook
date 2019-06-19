import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 25vw;
  height: 25vw;
  background: #535353;
  border-radius: 5px;
`;

function Vs() {
  const [state, setState] = React.useState(0);
  React.useEffect(() => {
   alert('useEffect')
   return () => {
     alert('clear useEffect')
   }
  })
  React.useLayoutEffect(() => {
   alert('useLayoutEffect')
   return () => {
     alert('clear useLayoutEffect')
   }
  })
  return <Button onClick={() => setState(prev =>prev +1)}>Click To add</Button>;
}

export default Vs;
