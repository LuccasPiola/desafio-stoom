import styled, { keyframes } from 'styled-components'

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 237.5px);
`
export const AnimatedImage = styled.img`
  width: 100px;
  animation: ${rotationAnimation} 2.5s infinite linear;
`
