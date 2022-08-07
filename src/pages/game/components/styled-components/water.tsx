import styled, { keyframes } from "styled-components";

const waterBobKeyframes = keyframes`
  0% { transform: translatey(0.09rem); }
  50% { transform: translatey(-0.09rem); }
  100% { transform: translatey(0.09rem); }
`;

const WaterBox = styled.span<{ animationDelay?: string }>`
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
  animation: ${waterBobKeyframes} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.animationDelay};
`;

const WaterRow = styled.div`
  display: flex;
`;

const WaterPlane = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background-color: lightgray;
`;

const WaterBoard = () => {
  return (
    <WaterPlane>
      <WaterRow>
        <WaterBox animationDelay="-1s" />
        <WaterBox animationDelay="-2s" />
        <WaterBox animationDelay="-3s" />
        <WaterBox animationDelay="-4s" />
        <WaterBox animationDelay="-5s" />
        <WaterBox animationDelay="-6s" />
        <WaterBox animationDelay="-7s" />
      </WaterRow>
      <WaterRow>
        <WaterBox animationDelay="-2s" />
        <WaterBox animationDelay="-2s" />
        <WaterBox animationDelay="-4s" />
        <WaterBox animationDelay="-5s" />
        <WaterBox animationDelay="-6s" />
        <WaterBox animationDelay="-7s" />
        <WaterBox animationDelay="-8s" />
      </WaterRow>
      <WaterRow>
        <WaterBox animationDelay="-3s" />
        <WaterBox animationDelay="-4s" />
        <WaterBox animationDelay="-5s" />
        <WaterBox animationDelay="-6s" />
        <WaterBox animationDelay="-7s" />
        <WaterBox animationDelay="-8s" />
        <WaterBox animationDelay="-9s" />
      </WaterRow>
      <WaterRow>
        <WaterBox animationDelay="-4s" />
        <WaterBox animationDelay="-5s" />
        <WaterBox animationDelay="-6s" />
        <WaterBox animationDelay="-7s" />
        <WaterBox animationDelay="-8s" />
        <WaterBox animationDelay="-9s" />
        <WaterBox animationDelay="-10s" />
      </WaterRow>
      <WaterRow>
        <WaterBox animationDelay="-5s" />
        <WaterBox animationDelay="-6s" />
        <WaterBox animationDelay="-7s" />
        <WaterBox animationDelay="-8s" />
        <WaterBox animationDelay="-9s" />
        <WaterBox animationDelay="-10s" />
        <WaterBox animationDelay="-11s" />
      </WaterRow>
      <WaterRow>
        <WaterBox animationDelay="-6s" />
        <WaterBox animationDelay="-7s" />
        <WaterBox animationDelay="-8s" />
        <WaterBox animationDelay="-9s" />
        <WaterBox animationDelay="-10s" />
        <WaterBox animationDelay="-11s" />
        <WaterBox animationDelay="-12s" />
      </WaterRow>
      <WaterRow>
        <WaterBox animationDelay="-7s" />
        <WaterBox animationDelay="-8s" />
        <WaterBox animationDelay="-9s" />
        <WaterBox animationDelay="-10s" style={{ backgroundColor: "pink" }}>
          S
        </WaterBox>
        <WaterBox animationDelay="-11s" />
        <WaterBox animationDelay="-12s" />
        <WaterBox animationDelay="-13s" />
      </WaterRow>
    </WaterPlane>
  );
};

export default WaterBoard;
