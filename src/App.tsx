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
    align-items: center;
    background-color: gray;
`

const StyledDivByUser = styled.div`
    flex: 0 0 auto;
    width: 30%;
    height: 30%;
    margin: 25%;
    padding: 10px;
    background-color: ${props => props.color};
`

function App() {
  return (
    <StyledDivApp>
      <StyledDivByUser color='yellow'>

        <Carousel option={{ slideTime: 1000, autoPlay: false }}>
          <div><span>1. This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen.</span></div>
          <div><span>2. This guide occasionally uses some of the newer JavaScript syntax in the examples. If you haven’t worked with JavaScript in the last few years, these three points should get you most of the way.</span></div>
          <div><span>3. It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.</span></div>
          <div><span>4. Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise</span></div>
          <div><span>5. By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.</span></div>
          <div><span>6. By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.</span></div>
        </Carousel>

      </StyledDivByUser>

    </StyledDivApp>
  );
}

export default App;
