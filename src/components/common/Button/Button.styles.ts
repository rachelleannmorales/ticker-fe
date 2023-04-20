import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  background-color: #7cb5ec;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  `