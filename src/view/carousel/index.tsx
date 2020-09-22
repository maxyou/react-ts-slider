import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Sub from './sub'

const StyledDivCarousel = styled.div`
    width: 100%;
    height: 100%;
    background-color: #c23456;
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
    background-color: blue;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;    
    align-items: stretch;
`
//left:${(props)=>props.left}%;

interface CarouselOption {
  slideTime: number,
  autoPlay: boolean
}
interface IProps {
  children: any,
  option: CarouselOption
}

function Carousel(props: IProps) {

  const childrenNumber = React.Children.count(props.children)
  const childrenLeft:number[] = []

  for(let i = 0; i < childrenNumber; i++){
      let leftOffset = ((childrenNumber - 1)*100)/2 - (100*i)
      console.log(`i=${i}, a=${leftOffset}`)
      childrenLeft.push(leftOffset)
  }
  console.log(childrenLeft)

  const [left, setLeft] = useState(childrenLeft[0])
  const [counts, setCounts] = useState<number[]>()

  useEffect(
    () => {
      console.log('run setCounts()')
      setTimeout(() => {
        setLeft(childrenLeft[1])
      }, 2000);
    }, []
  )
  useEffect(
    () => {
      console.log('run setCounts()')
      setCounts(new Array(props.children.length).fill(0))
    }, []
  )
  console.log('counts:')
  console.log(counts)

  return <StyledDivCarousel>
    <StyledDivWin left={left}>
      {
        React.Children.map(props.children,(v: any, index: number) => {
          return <Sub key={index} color={getColor(index)} process={counts ? counts[index] : 0}>{v}</Sub>
        })
      }
    </StyledDivWin>
  </StyledDivCarousel>
}

const subColor = [
  '#234567',
  '#c34567',
  '#c3c567',
  '#c345c7',
  '#c3a5c7',
]
function getColor(n:number){
  const mn = n % 5
  return subColor[mn]
}

export default Carousel

