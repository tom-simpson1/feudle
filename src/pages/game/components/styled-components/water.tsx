import styled from "styled-components";

const WaterBox = styled.span`
  margin: 0.1rem;
  width: 2rem;
  height: 2rem;
  background-color: #8bf;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  box-shadow: 1px 2px #eee;
`;

const WaterRow = styled.div`
  display: flex;
`;

const WaterBoard = () => {
  return (
    <>
      <WaterRow>
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
      </WaterRow>
      <WaterRow>
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
      </WaterRow>
      <WaterRow>
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
      </WaterRow>
      <WaterRow>
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
      </WaterRow>
      <WaterRow>
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
      </WaterRow>
      <WaterRow>
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
      </WaterRow>
      <WaterRow>
        <WaterBox />
        <WaterBox />
        <WaterBox style={{ backgroundColor: "pink" }}>S</WaterBox>
        <WaterBox />
        <WaterBox />
        <WaterBox />
        <WaterBox />
      </WaterRow>
    </>
  );
};

export default WaterBoard;
