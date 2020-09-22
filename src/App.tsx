import React from 'react';
import './App.css'
import styled from 'styled-components'
import Carousel from './view/carousel'

const StyledDivApp = styled.div`
    width: 90vw;
    height: 90vh;
    margin-left: 5vw;
    margin-top: 5vh;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;    
    align-items: center;
    background-color: gray;
`

const StyledDivByUser = styled.div`
    flex: 0 0 auto;
    width: 30%;
    height: 30%;
    margin: 25%;
    padding: 10px;
    background-color: ${props => props.color};
`

function App() {
  return (
    <StyledDivApp>
      <StyledDivByUser color='yellow'>

        <Carousel option={{ slideTime: 1000, autoPlay: false }}>
          <div>1111</div>
          <div>22222</div>
          <div>333333</div>
          <div>444</div>
          <div>444</div>
        </Carousel>

      </StyledDivByUser>

    </StyledDivApp>
  );
}

export default App;
