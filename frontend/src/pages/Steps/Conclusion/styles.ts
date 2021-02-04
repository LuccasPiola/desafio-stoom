import { shade } from 'polished'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import Button from '../../../components/Button'

const fadeInAnimation = keyframes`${fadeIn} 100% { opacity: 1 }`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 170px;

  h1 {
    opacity: 0;
    font-family: 'Parisienne', cursive;
    font-size: 80px;
    text-align: center;
    animation: 1.5s ${fadeInAnimation} 0.5s;
    animation-fill-mode: forwards;
  }

  h2 {
    opacity: 0;
    font-family: 'Parisienne', cursive;
    font-size: 50px;
    text-align: center;
    animation: 1.5s ${fadeInAnimation} 1.5s;
    animation-fill-mode: forwards;
  }
`

export const Next = styled(Button)`
  margin-top: 40px;
  button {
    opacity: 0;
    border-radius: 10px;
    padding: 5px 50px;
    font-size: 25px;
    font-weight: 700;
    transition: background-color 0.5s;
    color: #fff;
    background-color: #f8c763;
    font-weight: 500;
    animation: 1.5s ${fadeInAnimation} 2.5s;
    animation-fill-mode: forwards;

    &:hover {
      transition: background-color 0.5s;
      background-color: ${shade('0.2', '#f8c763')};
    }
  }
`
