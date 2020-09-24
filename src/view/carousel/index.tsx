import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Sub from './sub'

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

const StyledDivProgressValue = styled.div<{run:string}>`
    width: 0%;
    height: 100%;
    background-color: green;
    animation: ${progress0to100} 2s 1;
    animation-fill-mode: forwards;
    animation-play-state: ${props=>props.run};
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

  const childrenSub = React.Children.toArray(props.children)
  
  const childrenNumber = childrenSub.length
  const childrenProgress:any[] = []
  const childrenLeft:number[] = []  
  // const [count, setCount] = useState(0)
  const [runCtrl, setRunCtrl] = useState('paused')
  const [currentSub, setCurrentSub] = useState(0) //1~n

  for(let i = 0; i < childrenNumber; i++){    
    let leftOffset = ((childrenNumber - 1)*100)/2 - (100*i)
    // console.log(`i=${i}, a=${leftOffset}`)
    
    childrenLeft.push(leftOffset)
    
    childrenProgress.push(<StyledDivProgressMax key={i}>
        <StyledDivProgressValue 
          run={runCtrl}
          onAnimationStart={onProgressAnimationStart} 
          onAnimationEnd={onProgressAnimationEnd} 
          id={`pv${i}`}>              
        </StyledDivProgressValue>
      </StyledDivProgressMax>)  
  }

  const [left, setLeft] = useState(childrenLeft[0])


  function onProgressAnimationStart(e:any){

    console.log(`onProgressAnimationStart: ${e.target.id}`)

  }
  function onProgressAnimationEnd(e:any){

    console.log(`onProgressAnimationEnd: ${e.target.id}`)
    setLeft(childrenLeft[1])
  }


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
    setRunCtrl('running')
  }

  return <StyledDivCarousel>
    <StyledDivWin left={left}>
      {
        childrenSub.map((v, index)=><Sub key={index} subMsg='subMsg'>{v}</Sub>)
      }
    </StyledDivWin>
    <StyledDivLeftArrow onClick={onArrowLeftClicked}  id='leftArrow'>{`<`}</StyledDivLeftArrow>
    <StyledDivRightArrow onClick={onArrowRightClicked} id='rightArrow'>{`>`}</StyledDivRightArrow>
    <StyledDivProcess>
      {
        childrenProgress
      }
      {/* <StyledDivProgress></StyledDivProgress> */}
    </StyledDivProcess>
  </StyledDivCarousel>
}


export default Carousel

