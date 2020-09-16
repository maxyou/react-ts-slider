import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Sub from './sub'


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
function Carousel() {

  return <StyledDivCarousel>
      <StyledDivWin>
        <Sub color='red'></Sub>
        <Sub color='yellow'></Sub>
        <Sub color='blue'></Sub>
      </StyledDivWin>
    </StyledDivCarousel>
        
        {/* <StyledDivCarousel>
          <StyledDivWin>
              <StyledDivSub color='red'></StyledDivSub>
              <StyledDivSub color='brown'></StyledDivSub>
              <StyledDivSub color='green'></StyledDivSub>
          </StyledDivWin>
        </StyledDivCarousel> */}
}

export default Carousel

