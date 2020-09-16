import React from 'react';
import styled from 'styled-components'

interface IDivProp {
    aaa: string,
    children: any,
    className?: any
}


const StDiv = function (props: any) {

    console.log('props.aaa:')
    console.log(props.aaa)

    return (
        <div className={props.className}>
            {props.children}
            {props.aaa}
        </div>
    )
}

const SDiv = (props: IDivProp) => (
    <div className={props.className}>
        {props.children}
        {props.aaa}
    </div>
)

const StyledDiv = styled(StDiv)`
    padding:10px;
    margin:10px;
    width:300px;
    display:block;
    color: red;
    background:green;
    font-weight: bold;
  `
export default StyledDiv