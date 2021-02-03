import styled from 'styled-components'
import { shade } from 'polished'

import woodenBackground from '../../../assets/background-wood.jpg'
import Button from '../../../components/Button'

export const Wrapper = styled.div`
  background-image: url(${woodenBackground});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  aside {
    margin-left: 200px;

    h1 {
      font-size: 35px;
      margin-bottom: 15px;
      font-weight: 900;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 12px;
      font-weight: 500;
    }

    hr {
      width: 450px;
    }

    h3 {
      margin-top: 50px;
      font-size: 17px;
      margin-bottom: 20px;
    }

    span {
      margin: 0 10px;
      font-weight: 900;
    }
  }
`

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
`

export const YellowButton = styled(Button)`
  button {
    background-color: #f8c763;
    border: 0;
    border-radius: 10px;
    padding: 5px 20px;
    font-size: 20px;
    font-weight: 700;
    transition: background-color 0.5s;

    &:hover {
      transition: background-color 0.5s;
      background-color: ${shade('0.4', '#f8c763')};
    }
  }
`

export const OutlineButton = styled(Button)`
  button {
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 5px 20px;
    font-size: 20px;
    font-weight: 700;
    transition: border-color 0.5s;

    &:hover {
      transition: border-color 0.5s;
      border-color: ${shade('0.4', '#fff')};
    }
  }
`
