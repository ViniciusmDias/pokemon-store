import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 14vh;
  position: relative;
  background-color: var(--white);

  aside {
    display: flex;
    right: 0;
    margin: 0 3vw;
    align-items: center;

    a {
      font-size: 24px;
      display: flex;
      align-items: center;
      color: var(--gray);

      @media (min-width: 765px) {
        font-size: 32px;
      }
    }
  }
`

export const MenuLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  font-size: 2rem;
  letter-spacing: 3px;
  font-weight: bold;
  margin: 0 3vw;
  flex: 1;
  text-align: center;

  @media (min-width: 765px) {
    font-size: 2.5rem;
    letter-spacing: 4px;
  }
`

export const Button = styled.button`
  margin-top: 0.3vh;
  background-color: transparent;
  border: none;
  cursor: pointer;
  pointer-events: visible;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 24px;
  height: 24px;

  @media (min-width: 765px) {
    width: 32px;
    height: 32px;
  }

  div {
    width: 24px;
    border: 1px solid var(--gray);
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    transform: rotate(0);

    @media (min-width: 765px) {
      border: 2px solid var(--gray);
      width: 32px;
      height: 6px;
    }
    &:nth-child(2) {
      width: 20px;
      opacity: 1;
      visibility: visible;

      @media (min-width: 765px) {
        width: 26px;
      }
    }
  }
  &:hover {
    div {
      opacity: 0.7;
    }
  }
  &.click div:nth-child(1) {
    transform: rotate(45deg) translate(6px, 5px);
    border: 1px solid var(--gray);
    @media (min-width: 765px) {
      transform: rotate(45deg) translate(9px, 8px);
    }
  }
  &.click div:nth-child(2) {
    opacity: 0;
    visibility: hidden;
  }
  &.click div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -4px);
    border: 1px solid var(--gray);
  }
`
