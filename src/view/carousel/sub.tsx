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
const StyledDivChild = styled.div`
    width: 100%;
    height: 100%;
`
const StyledDivProcess = styled.div`
    width: 70%;
    height: 10%;
    position:absolute;
    bottom:5%;
    left:15%;
    display: flex;
    justify-content: center;    
    align-items: center;
`
const StyledProcess = styled.progress`
  width: 50%;
  flex: 0 0 auto;
`
export default function SubPage(props: any) {


  return <StyledDivSub color={props.color}>
    <StyledDivChild>
      {props.children}
    </StyledDivChild>
    <StyledDivProcess>
      <StyledProcess value={props.process} max="100"></StyledProcess>
    </StyledDivProcess>
  </StyledDivSub>


}