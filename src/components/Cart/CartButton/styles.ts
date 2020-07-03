import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 2px;
  margin-top: 5px;
  border: 0;
  width: 100%;
  height: 45px;
  color: var(--secondary) !important;
  background: var(--primary);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
