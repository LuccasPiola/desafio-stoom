import styled, { css, keyframes } from 'styled-components'
import { fadeInLeft, fadeInRight, slideInDown, fadeIn } from 'react-animations'
import { shade } from 'polished'

import Button from '../../components/Button'

const fadeAnimationLeft = keyframes`${fadeInLeft} 100% { opacity: 1 }`
const fadeAnimationRight = keyframes`${fadeInRight} 100% { opacity: 1 }`
const slideUpAnimation = keyframes`${slideInDown} 100% { opacity: 1 }`
const fadeInAnimation = keyframes`${fadeIn} 100% { opacity: 1 }`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  height: 600px;

  aside {
    animation: 1s ${fadeAnimationLeft};
    h1 {
      font-family: 'Parisienne', cursive;
      font-size: 80px;
      text-align: center;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 80px;
    opacity: 0;
    animation: 1s ${fadeAnimationRight} 0.5s;
    animation-fill-mode: forwards;
    main {
      background-color: #fff;
      border-radius: 10px;
      padding: 20px 30px;
      color: #2e2e2e;

      h1 {
        font-weight: 900;
        font-size: 40px;
        margin-bottom: 40px;
        text-align: center;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    article {
      margin-top: 50px;
      h2 {
        width: 560px;
        margin: 0 auto;
        font-family: 'Parisienne', cursive;
        font-size: 25px;
        opacity: 0;
        animation: 0.7s ${slideUpAnimation};
        animation-fill-mode: forwards;
      }
    }

    footer {
      display: flex;
      margin-top: 40px;
      align-items: center;
    }
  }
`
export const Option = styled(Button)<{ isSelected?: boolean }>`
  button {
    width: 180px;
    border: 1px solid #f8c763;
    border-radius: 10px;
    padding: 5px 20px;
    font-size: 20px;
    font-weight: 700;
    transition: background-color 0.5s;
    color: #2e2e2e;
    font-weight: 500;
    transition: border-color 0.5s;

    ${({ isSelected }) =>
      isSelected
        ? css`
            color: #fff;
            background-color: #f8c763;
            transition: background-color 0.5s;
          `
        : css`
            &:hover {
              transition: border-color 0.5s;
              border-color: ${shade('0.2', '#f8c763')};
            }
          `}
  }

  & + div {
    margin-left: 15px;
  }
`

export const Next = styled(Button)`
  button {
    border-radius: 10px;
    padding: 5px 50px;
    font-size: 25px;
    font-weight: 700;
    transition: background-color 0.5s;
    color: #fff;
    background-color: #f8c763;
    font-weight: 500;

    &:hover {
      transition: background-color 0.5s;
      background-color: ${shade('0.2', '#f8c763')};
    }
  }
`

export const Back = styled(Button)`
  button {
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 5px 50px;
    font-size: 25px;
    font-weight: 700;
    transition: border-color 0.5s;
    color: #fff;
    font-weight: 500;
    margin-right: 20px;

    &:hover {
      transition: border-color 0.5s;
      border-color: ${shade('0.2', '#fff')};
    }
  }
`

export const AnimatedImage = styled.img`
  opacity: 0;
  animation: 1s ${fadeInAnimation};
  animation-fill-mode: forwards;
`
