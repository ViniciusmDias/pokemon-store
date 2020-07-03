import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  align-items: center;
  background: transparent;
  margin-top: 5vh;
  height: 4vh;

  a {
    font-size: 1.2rem;
    color: var(--black);
    letter-spacing: 4px;
    text-decoration: none;
    font-weight: bold;
    margin: 0 3vw;
    opacity: 1;
    transition: 0.2s all ease-in-out;

    &:hover {
      color: var(--primary);
      opacity: 0.7
    }
  }
`
