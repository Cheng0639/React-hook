import React from 'react';
import styled from 'styled-components';

const UserInfoContext = React.createContext();
const AppInfoContext = React.createContext();

const Container = styled.div``;

const useContext = () => {
  return (
    <UserInfoContext.Provider value={{ name: 'Avicii' }}>
      <AppInfoContext.Provider value={{ version: '12345678' }}>
        <Consumer />
      </AppInfoContext.Provider>
    </UserInfoContext.Provider>
  );
};

const Consumer = () => {
  const userInfo = React.useContext(UserInfoContext);
  const appInfo = React.useContext(AppInfoContext);
  return (
    <Container>
      <h2>UserName: {userInfo.name}</h2>
      <h2>version: {appInfo.version}</h2>
    </Container>
  );
};

export default useContext;
