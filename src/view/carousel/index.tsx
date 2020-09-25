import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Sub from './sub'
import Progress, {State as ProgressState, Ctrl as ProgressCtrl} from './progress'

const StyledDivCarousel = styled.div`
    width: 100%;
    height: 100%;
    background-color: #c27496;
    position: relative;
    //overflow: hidden;
`

const StyledDivWin = styled.div<{left: number}>`
    transition:left 0.5s; 
    left:${(props)=>props.left}%;
    position:relative;    
    width: 100%;
    height: 100%;
    //background-color: blue;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;    
    align-items: stretch;
`
const StyledDivLeftArrow = styled.div`
    width: 5%;
    height: 30%;
    position:absolute;
    top:30%;
    left:0%;
    background-color: blue;
`
const StyledDivRightArrow = styled.div`
    width: 5%;
    height: 30%;
    position:absolute;
    top:30%;
    right:0%;
    background-color: blue;
`

interface CarouselOption {
  slideTime: number,
  autoPlay: boolean
}
interface IProps {
  children: any,
  option: CarouselOption
}

function Carousel(props: IProps) {

  console.log('in Carousel()')

  const childrenSub = React.Children.toArray(props.children).map((v, index)=><Sub key={index} subMsg='subMsg'>{v}</Sub>)
  
  const childrenNumber = childrenSub.length

  const childrenLeft:number[] = []  
  const [currentSub, setCurrentSub] = useState(1) //1~n
  const [runNumber, setRunNumber] = useState(1) //1~n

  for(let i = 0; i < childrenNumber; i++){    
    let leftOffset = ((childrenNumber - 1)*100)/2 - (100*i)      
    childrenLeft.push(leftOffset)  
  }
  const [left, setLeft] = useState(childrenLeft[0])


  useEffect(
    () => {
    }, []
  )

  function onArrowLeftClicked(e:any){
    // alert('left')
    console.log(e.target.id)
  }
  function onArrowRightClicked(e:any){
    // alert('right')    
    console.log(e.target.id)
    // setRunCtrl('running')
    setRunNumber(runNumber+1)
  }

  function onProgressAnimState(progressState:ProgressState){

    console.log(`onProgressAnimEnd: ${currentSub}`)
    if(currentSub<childrenNumber){
      setLeft(childrenLeft[currentSub])
      setCurrentSub(currentSub+1)
      setRunNumber(runNumber+1)
    }
  }

  return <StyledDivCarousel>
    <StyledDivWin left={left}>
      {childrenSub}
    </StyledDivWin>
    <StyledDivLeftArrow onClick={onArrowLeftClicked}  id='leftArrow'>{`<`}</StyledDivLeftArrow>
    <StyledDivRightArrow onClick={onArrowRightClicked} id='rightArrow'>{`>`}</StyledDivRightArrow>
    <Progress 
      childrenNum={childrenNumber} 
      currentSub={currentSub} 
      callback={onProgressAnimState} 
      progressCtrl={ProgressCtrl.RUN}
      runNumber={runNumber}
    >
    </Progress>
  </StyledDivCarousel>
}


export default Carousel

