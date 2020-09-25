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
const progress0to100_2 = keyframes`
  from {
    width: 1%;
  }
  to {
    width: 100%;
  }
`
const StyledDivProgressValue = styled.div<{ animName:any, animPlayState: string }>`
    width: 0%;
    height: 100%;
    background-color: green;
    animation-name: ${props => props.animName};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: ${props => props.animPlayState};
`

interface IProgress {
  children?:any,
  childrenNum: number,
  currentSub: number,
  progressCtrl: Ctrl,  
  callback: (progressState:number)=>any, //number should change to enum
  runNumber: number //refresh progress bar only
}
export default function Progress(props: IProgress) {

  console.log(`in Progress(): ${props.runNumber%2}`)

  const childrenProgress: any[] = []

  const progressCtrl2AnimPlayState = (a:Ctrl)=>{
    if(a == Ctrl.RUN){
      return 'running'
    }else{
      return 'paused'
    }
  }

  // for (let i = 0; i < props.childrenNum; i++) {
  for (let i = 0; i < 1; i++) {
    // console.log(`in Progress(): childrenProgress.push(), props.runNumber:${props.runNumber}`)
    childrenProgress.push(<StyledDivProgressMax key={i}>
      <StyledDivProgressValue
        animName={props.runNumber%2==0?progress0to100:progress0to100_2}
        // animName={props.runNumber%2==0?progress0to100:null}
        animPlayState={progressCtrl2AnimPlayState(props.progressCtrl)}
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
    
    props.callback(State.END)
  }

  return <StyledDivProcess>
    {childrenProgress}
  </StyledDivProcess>

}

export enum State{
  READY,
  RUNNING,
  PAUSED,
  END
}
export enum Ctrl{
  RESET,
  RUN,
  PAUSE,
  JUMP_TO_END
}