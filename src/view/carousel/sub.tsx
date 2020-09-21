import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

interface ISub {
  color: string
}
const StyledDivSub = styled.div<ISub>`
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    position:relative;
    background-color: ${(props) => props.color};    
`
const StyledDivProcess = styled.div`
    width: 100%;
    height: 100%;
    position:absolute;
    bottom:10px;
    padding: 15px;
    background-color: yellow;
`
const StyledDivChild = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: blue;
`
export default function SubPage(props: any) {


  return <StyledDivSub color={props.color}>
    {/* <StyledDivChild>
      {props.children}
    </StyledDivChild>
    <StyledDivProcess>
      <progress value={props.process} max="100"></progress>
    </StyledDivProcess> */}
  </StyledDivSub>


}