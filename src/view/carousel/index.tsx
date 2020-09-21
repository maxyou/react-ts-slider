import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { getDefaultCompilerOptions } from 'typescript';
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
    position:relative;
    left:${(props)=>props.left}%;
    width: 100%;
    height: 100%;
    background-color: blue;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;    
    align-items: stretch;
`

interface CarouselOption {
  startAt: number,
  autoPlay: boolean
}
interface IProps {
  children: any,
  option: CarouselOption
}

function Carousel(props: IProps) {

  const [left, setLeft] = useState(0)
  const [counts, setCounts] = useState<number[]>()

  useEffect(
    () => {
      console.log('run setCounts()')
      setTimeout(() => {
        setLeft(100)
      }, 2000);
      setCounts(new Array(props.children.length).fill(0))
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
          console.log('========v.key:')
          console.log(v.key)
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

