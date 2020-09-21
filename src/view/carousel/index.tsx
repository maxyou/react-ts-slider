import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Sub from './sub'


const StyledDivCarousel = styled.div`
    width: 100%;
    height: 100%;
    padding: 2%;
    background-color: #123456;
    position: relative;
    //overflow: hidden;
`
const StyledDivWin = styled.div`
    width: 90%;
    height: 90%;    
    position:absolute;
    left:100px;    
    background-color: blue;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;    
    align-items: stretch;
`
const StyledDivSub = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.color};
    flex: 0 0 auto;
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

  // function childrenAddKey(arr: []) {
  //   if (arr.length >= 0) {
  //     return arr.map((v: any, index) => {
  //       console.log('index:')
  //       console.log(index)
  //       return { ...v, key: index }
  //     })
  //   } else {
  //     return []
  //   }
  // }
  // const children = childrenAddKey(props.children)

  const [counts, setCounts] = useState<number[]>()
  // const countss = new Array(props.children.length).fill(0)
  // console.log(countss)
  useEffect(
    () => {
      console.log('run setCounts()')
      setCounts(new Array(props.children.length).fill(0))
    }, []
  )
  console.log('counts:')
  console.log(counts)

  return <StyledDivCarousel>
    <StyledDivWin>
      {
        props.children.map(
          (v: any, index: number) => {
            console.log('========v.key:')
            console.log(v.key)
            return <Sub key={index} color='red' process={counts ? counts[index] : 0}>{v}</Sub>
          }
        )
      }
    </StyledDivWin>
  </StyledDivCarousel>
}

export default Carousel

