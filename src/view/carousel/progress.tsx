import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const StyledDivProcess = styled.div`
    width: 70%;
    height: 10%;
    position:absolute;
    bottom:5%;
    left:15%;
    background-color: red;
    display: flex;
    justify-content: center;    
    align-items: stretch;
`
const StyledDivProgressMax = styled.div`
    width: 0%;
    flex: 1 1 auto;
    background-color: yellow;
    margin:3px;    
`
const progress0to100 = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`

const StyledDivProgressValue = styled.div<{ run: string }>`
    width: 0%;
    height: 100%;
    background-color: green;
    animation: ${progress0to100} 2s 1;
    animation-fill-mode: forwards;
    animation-play-state: ${props => props.run};
`


interface IProgress {
  childrenNum: number,
  currentSub: number,
  callback: () => void
}
export default function Progress(props: IProgress) {
  const [runCtrl, setRunCtrl] = useState('running')

  const childrenProgress: any[] = []

  for (let i = 0; i < props.childrenNum; i++) {
    let leftOffset = ((props.childrenNum - 1) * 100) / 2 - (100 * i)
    // console.log(`i=${i}, a=${leftOffset}`)


    childrenProgress.push(<StyledDivProgressMax key={i}>
      <StyledDivProgressValue
        run={runCtrl}
        onAnimationStart={onProgressAnimationStart}
        onAnimationEnd={onProgressAnimationEnd}
        id={`pv${i}`}>
      </StyledDivProgressValue>
    </StyledDivProgressMax>)
  }



  function onProgressAnimationStart(e: any) {

    console.log(`onProgressAnimationStart: ${e.target.id}`)

  }
  function onProgressAnimationEnd(e: any) {

    console.log(`onProgressAnimationEnd: ${e.target.id}`)
    // setLeft(childrenLeft[1])
    props.callback()
  }

  return <StyledDivProcess>
    {childrenProgress}
  </StyledDivProcess>


}