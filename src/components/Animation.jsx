import React from 'react'
import styled from 'styled-components'
import { useWindowSize } from '../utilities/useWindowSize'


function Animation() {

  const { width, height } = useWindowSize()
  console.log(width, height)

  const moveAnimation = keyframes`
   0% {
        transform: translate(0 , 0);
        
   }
   50% {
      transform: translate(${width}px, ${height / 2}px);
   }
   100%{
    transform: translate(0 , 0);
   }
  `;

  const AnimationStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(400px);
        animation: ${moveAnimation} 16s alternate linear infinite;
  
  `;
  return (
    <AnimationStyled></AnimationStyled>
  );
}

export default Animation;