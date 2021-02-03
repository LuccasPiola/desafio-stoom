import styled from 'styled-components'
import { INavbarItem } from './types'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100px;
    }

    h1 {
      margin-top: 5px;
      font-size: 40px;
    }
  }

  ul {
    display: flex;
    width: 100%;
    justify-content: center;
    list-style-type: none;
    margin-top: 40px;
  }
`

export const NavbarItem = styled.li<INavbarItem>`
  cursor: pointer;
  transition: color 0.5s;
  position: relative;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  & + li {
    margin-left: 20px;
  }

  &:hover {
    color: #f8c763;
    transition: color 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -8px;
    height: 5px;
    width: 5px;
    background-color: #f8c763;
    border-radius: 50%;
    visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  }
`
