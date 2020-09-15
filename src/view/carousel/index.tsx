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

export default function Carousel() {

  return <StyledDivCarousel>
      <StyledDivWin>
        <Sub></Sub>
      </StyledDivWin>
    </StyledDivCarousel>

  // const [count, setCount] = useState(0);

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });

  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>
  //       Click me in Carousel
  //     </button>
  //   </div>
  // );
}

