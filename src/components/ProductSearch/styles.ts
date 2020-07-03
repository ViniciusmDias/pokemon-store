import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 2px;
  background: #131313;
  max-width: 400px;

  img {
    max-width: 100px;
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    min-width: 200px;
    margin-left: 10px;

    strong {
      font-weight: 500;
      font-size: 14px;
    }
  }

`
;
