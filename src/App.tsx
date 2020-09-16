import React from 'react';
import './App.css'
import styled from 'styled-components'
import Carousel from './view/carousel'

const StyledDivApp = styled.div`
    width: 90vw;
    height: 90vh;
    margin-left: 5vw;
    margin-top: 5vh;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;    
    align-items: stretch;
    background-color: gray;
`

const StyledDivByUser = styled.div`
    flex: 0 0 auto;
    width: 30%;
    height: 30%;
    margin-top: 15%;
    background-color: ${props=>props.color};
`

const StyledDivCarousel = styled.div`
    width: 100%;
    height: 100%;
    padding: 2%;
    background-color: #123456;
    //overflow: hidden;
`
const StyledDivWin = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;    
    align-items: stretch;
`
const StyledDivSub = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props=>props.color};
    flex: 0 0 auto;
`
interface IDDProp {
  c2olor: string
}
// const HH = styled.h2.attrs<IHHProp>({
//   colo2r: (props:IHHProp)=>props.colo3r,
//   // colo3r: 'brown',
// })`
// border:2px solid #dede00;
// color: ${(props:IHHProp)=>props.colo2r};
// `

const DD = styled.div<{c2olor: string}>`
  background-color: ${props=>props.c2olor};
  margin-left: 15vw;
  margin-top: 15vh;
  width: 100px;
  height: 100px;
`
interface IHHProp {
  colo2r: string,
  colo3r: string,
  width: string,
  children: any,
  className: any
}
const SubPage = (props:IHHProp)=>{
  return <div className={props.className} style={{
    backgroundColor:props.colo2r,
    width:props.width
  }}>color: {props.colo2r}</div>
  // return <div color={props=>props.colo2r}></div>
}

const StyledSubPage = styled(SubPage)`
  width: 200px;
  hight: 100px;
`
const Button = (props:IHHProp) => {
  return <a className={props.className} >{props.children}</a>;
};
const StyledButton = styled(Button)`
color: palevioletred;
font-weight: bold;
`

interface IDivProp {
  aaa:string,
  children: any,
  className?: any
}
const SDiv = (props:IDivProp) => (
  <div className={props.className}>
    {props.children}
    {props.aaa}
  </div>
)

const StyledDiv = styled(SDiv)`
  padding:10px;
  margin:10px;
  width:300px;
  display:block;
  color: red;
  background:green;
  font-weight: bold;
`
function App() {
  return (<div>
  <StyledDiv aaa='aaaaaa'>---Styled Div---</StyledDiv>

    {/* <StyledButton>aa</StyledButton> */}

    {/* <StyledSubPage>todos</StyledSubPage>                 */}

    {/* <HH colo3r='green' colo2r='red'>todos aaa</HH> */}

    {/* <HH colo3r='blue'  colo2r='red'>todos</HH>                 */}
    <hr/>
    {/* <HH colo4r='red'>total todos:</HH> */}

    {/* <DD color='red' colo3r='blue'></DD> */}
              {/* <DD c2olor='red' ></DD> */}
  </div>

    // <StyledDivApp>      


    //   <StyledDivByUser color='yellow'>
        
    //     {/* <Carousel></Carousel> */}

    //     {/* <StyledDivCarousel>
    //       <StyledDivWin>
    //           <StyledDivSub color='red'></StyledDivSub>
    //           <StyledDivSub color='brown'></StyledDivSub>
    //           <StyledDivSub color='green'></StyledDivSub>
    //       </StyledDivWin>
    //     </StyledDivCarousel> */}
    //   </StyledDivByUser>
      
    // </StyledDivApp>
  );
}

// function DivWin() {
//   return <StyledDivWin>

//     </StyledDivWin>  
// }
// function DivSub() {
//   return <StyledDivSub>0000000000000</StyledDivSub>
// }



export default App;
