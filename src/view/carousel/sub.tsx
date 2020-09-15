import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const StyledDivSub = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props=>props.color};
    flex: 0 0 auto;
`

export default function SubPage() {

  return <StyledDivSub>0000000000000</StyledDivSub>

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
  //       Click me
  //     </button>
  //     <progress id="file" value="12" max="100"> 82% </progress>
  //   </div>
  // );
}