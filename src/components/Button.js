import React from 'react'
import styled from 'styled-components'
const Button = ({value, handleClick, styles, isActive}) => {



  return (
    <button style={styles} onClick={handleClick}>{value}</button>
  )
}

export default Button