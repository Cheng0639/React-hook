import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 75vw;
  height: 75vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 5px;
  background: #535353;
  padding: 1rem;
`;

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin: 0.4rem;
  border-radius: 20px;

  &.class {
    background: #e3f2fd;
  }
  &.function {
    background: #fffde7;
  }
  h1 {
    flex-basis: 25%;
  }
  section {
    font-size: 1.75rem;
    text-align: left;
  }
  button {
    flex-basis: 10%;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 8px;
  }
`;

const FunctionComponent = () => {
  const [state, setState] = React.useState({
    name: 'Harry Porter',
    gender: 'Male',
    age: 26
  });
  return (
    <Wrapper className="function">
      <h1>Function Component</h1>
      <section>
        {Object.keys(state).map(key => (
          <div>
            {key}: {state[key]}
          </div>
        ))}
      </section>
      <button onClick={() => setState({ ...state, age: state.age + 1 })}>
        Getting Older
      </button>
    </Wrapper>
  );
};

class ClassComponent extends React.Component {
  state = {
    name: 'Harry Porter',
    gender: 'Male',
    age: 26
  };
  render() {
    return (
      <Wrapper className="class">
        <h1>Class Component</h1>
        <section>
          {Object.keys(this.state).map(key => (
            <div>
              {key}: {this.state[key]}
            </div>
          ))}
        </section>
        <button
          onClick={e => {
            this.setState({ age: this.state.age + 1 });
          }}
        >
          Getting Older
        </button>
      </Wrapper>
    );
  }
}

const Compare = () => {
  return (
    <Container>
      <FunctionComponent />
      <ClassComponent />
    </Container>
  );
};

export default Compare;
