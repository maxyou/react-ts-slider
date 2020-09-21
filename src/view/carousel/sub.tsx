import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

interface ISub {
  c3olor: string
}
const StyledDivSub = styled.div<ISub>`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.c3olor};
    flex: 0 0 auto;
`

export default function SubPage(props: any) {



  return <StyledDivSub c3olor={props.color}>
    <div>
      {props.children}
    </div>
    <div>
      <progress value={props.process} max="100"></progress>
    </div>
  </StyledDivSub>


}