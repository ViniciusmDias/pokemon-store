import styled from 'styled-components'

export const Container = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 2px;
  background: var(--gray);

  button {
    padding: 0;
    background: transparent;

  }

  img {
    max-width: 100px;
  }

`
export const Section = styled.section`

  display: flex;
  flex-direction: column;
  margin-left: 15px;
  min-width: 200px;

  label {
    font-size: 12px;
    margin-bottom: 2px;
    color: #FFF;
    text-transform: capitalize;
  }

  div {
    display: flex;
    text-align: center;
    align-items: center;
    margin-top: 8px;

    button {
      text-align: center;
      width: 20px;
      height: 20px;
      font-size: 14px;
      padding: 0;
      background-color: transparent;
      background: #fff;
      border: 1px solid #FFF;
      border-radius: 100%;
      margin: 0px 10px;
    }
  }
`

