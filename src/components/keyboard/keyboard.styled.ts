import styled from "styled-components";

export const Row = styled.div`
  display: flex;
`;

export const Keyboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
  border-radius: 1rem;
`;

export const Key = styled.div`
  margin: 3px;
  cursor: pointer;
  width: 35px;
  height: 30px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  box-shadow: 1px 2px #eee;
`;

export const GuessedKey = styled(Key)`
  opacity: 50%;
`;

export const FunctionKey = styled(Key)`
  width: 50px;
`;
