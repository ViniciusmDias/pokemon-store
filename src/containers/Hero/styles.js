import styled from 'styled-components'
import BackgroundImg from '../../images/closet.jpg'

export const Background = styled.div`
    background: url(${BackgroundImg});
    width: 100vw;
    height: 86vh;
    position: fixed !important;
    animation: zoomInOut 10s infinite;
    z-index: -1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    opacity: 0.99;


    &:before {
      @media (min-width: 765px) {
        background-position: top !important;
      }
    }

  @keyframes zoomInOut {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`
