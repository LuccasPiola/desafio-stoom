import styled from 'styled-components'

import foodBackground from '../../../assets/food-background.jpg'

export const Wrapper = styled.div`
  background-image: url(${foodBackground});
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: -10;

  &::before {
    background-color: rgba(248, 199, 99, 0.83);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -5;
  }

  h1 {
    margin: 40px 0;
    font-size: 45px;
    font-weight: 500;
    color: #2e2e2e;
  }
`

export const IconArea = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 60%;
  margin-bottom: 40px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      font-size: 20px;
      margin-top: 15px;
      font-weight: 500;
      color: #2e2e2e;
      text-align: center;
    }
  }
`
