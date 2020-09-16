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
    align-items: stretch;
    background-color: gray;
`

const StyledDivByUser = styled.div`
    flex: 0 0 auto;
    width: 30%;
    height: 30%;
    margin-top: 15%;
    background-color: ${props=>props.color};
`

const StyledDivCarousel = styled.div`
    width: 100%;
    height: 100%;
    padding: 2%;
    background-color: #123456;
    //overflow: hidden;
`
const StyledDivWin = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;    
    align-items: stretch;
`
const StyledDivSub = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props=>props.color};
    flex: 0 0 auto;
`

function App() {
  return (
    <StyledDivApp>
      <StyledDivByUser color='yellow'>
        
        <Carousel></Carousel>

        {/* <StyledDivCarousel>
          <StyledDivWin>
              <StyledDivSub color='red'></StyledDivSub>
              <StyledDivSub color='brown'></StyledDivSub>
              <StyledDivSub color='green'></StyledDivSub>
          </StyledDivWin>
        </StyledDivCarousel> */}
      </StyledDivByUser>
      
    </StyledDivApp>
  );
}

export default App;
