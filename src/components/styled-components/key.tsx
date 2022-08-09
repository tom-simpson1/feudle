import styled from "styled-components";

const Key = styled.div`
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

const FunctionKey = styled(Key)`
  width: 50px;
`;

export { Key, FunctionKey };
