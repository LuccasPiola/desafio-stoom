import { shade } from 'polished'
import styled from 'styled-components'
import Button from '../../../components/Button'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 170px;

  h1 {
    font-family: 'Parisienne', cursive;
    font-size: 80px;
    text-align: center;
  }

  h2 {
    font-family: 'Parisienne', cursive;
    font-size: 50px;
    text-align: center;
  }
`

export const Next = styled(Button)`
  margin-top: 40px;
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
