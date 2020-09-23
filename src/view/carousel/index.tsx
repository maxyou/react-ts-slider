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
interface ILeft {
  left: number
}
const StyledDivWin = styled.div<ILeft>`
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
const progress0to100 = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`
const StyledDivProgressMax = styled.div`
    width: 0%;
    flex: 1 1 auto;
    background-color: yellow;
    margin:3px;    
`
const StyledDivProgressValue = styled.div`
    width: 0%;
    height: 100%;
    background-color: green;
    animation: ${progress0to100} 2s 1;
    animation-fill-mode: forwards;
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
  const childrenProgress = []
  const childrenLeft:number[] = []  

  for(let i = 0; i < childrenNumber; i++){
      let leftOffset = ((childrenNumber - 1)*100)/2 - (100*i)
      console.log(`i=${i}, a=${leftOffset}`)
      childrenLeft.push(leftOffset)
      childrenProgress.push(<StyledDivProgressMax key={i}><StyledDivProgressValue></StyledDivProgressValue></StyledDivProgressMax>)  
  }
  console.log(childrenLeft)

  const [left, setLeft] = useState(childrenLeft[0])
  const [count, setCount] = useState(0)
  const [currentSub, setCurrentSub] = useState(0) //1~n

  useEffect(
    () => {

    }, []
  )


  return <StyledDivCarousel>
    <StyledDivWin left={left}>
      {
        childrenSub.map((v, index)=><Sub key={index} subMsg='subMsg'>{v}</Sub>)
      }
    </StyledDivWin>
    <StyledDivProcess>
      {
        childrenProgress
      }
      {/* <StyledDivProgress></StyledDivProgress> */}
    </StyledDivProcess>
  </StyledDivCarousel>
}


export default Carousel

