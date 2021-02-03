import styled, { css } from 'styled-components'
import { shade } from 'polished'

import Button from '../../components/Button'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  aside h1 {
    font-family: 'Parisienne', cursive;
    font-size: 80px;
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 80px;
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
      }
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

            &:hover {
              transition: background-color 0.5s;
              background-color: ${shade('0.2', '#f8c763')};
            }
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
    margin-top: 40px;
    border: 1px solid #f8c763;
    border-radius: 10px;
    padding: 5px 100px;
    font-size: 30px;
    font-weight: 700;
    transition: background-color 0.5s;
    color: #fff;
    background-color: #f8c763;
    transition: background-color 0.5s;
    font-weight: 500;

    &:hover {
      transition: background-color 0.5s;
      background-color: ${shade('0.2', '#f8c763')};
    }
  }
`
