import styled, { keyframes} from 'styled-components'

const fade = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }

`

export const Container = styled.div`
  position: absolute;
  right: 2%;
  top: 12%;
  padding: 15px 20px;
  z-index: 9999;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fade} 200ms ease-in-out;

  &:hover {
    filter: brightness(110%);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      margin-left: 5px;
      font-size: 14px;
      font-weight: 400;
    }
  }
`


