import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
display: flex;

align-items: center;
width: 30%;
padding: 2rem;
gap: 2rem;
-webkit-box-shadow: 0 0 5px #999;
height: 12rem;
border-radius: 5%;

`

const Card = ({children}) => {



  return (
    <CardWrapper>{children}</CardWrapper>
  )
}

export default Card