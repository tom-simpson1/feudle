import styled, { keyframes } from "styled-components";

const waterBobKeyframes = keyframes`
  0% { transform: translatey(0.09rem); }
  50% { transform: translatey(-0.09rem); }
  100% { transform: translatey(0.09rem); }
`;

type TileProps = {
  animationDelay?: string;
  color?: string;
};

const GameTile = styled.span<TileProps>`
  margin: 0.1rem;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.color ?? "#8bf"};
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
        <GameTile animationDelay="-1s" />
        <GameTile animationDelay="-2s" />
        <GameTile animationDelay="-3s" />
        <GameTile animationDelay="-4s" />
        <GameTile animationDelay="-5s" />
        <GameTile animationDelay="-6s" />
        <GameTile animationDelay="-7s" />
      </WaterRow>
      <WaterRow>
        <GameTile animationDelay="-2s" />
        <GameTile animationDelay="-2s" />
        <GameTile animationDelay="-4s" />
        <GameTile animationDelay="-5s" />
        <GameTile animationDelay="-6s" />
        <GameTile animationDelay="-7s" />
        <GameTile animationDelay="-8s" />
      </WaterRow>
      <WaterRow>
        <GameTile animationDelay="-3s" />
        <GameTile animationDelay="-4s" />
        <GameTile animationDelay="-5s" />
        <GameTile animationDelay="-6s" />
        <GameTile animationDelay="-7s" />
        <GameTile animationDelay="-8s" />
        <GameTile animationDelay="-9s" />
      </WaterRow>
      <WaterRow>
        <GameTile animationDelay="-4s" />
        <GameTile animationDelay="-5s" />
        <GameTile animationDelay="-6s" />
        <GameTile animationDelay="-7s" />
        <GameTile animationDelay="-8s" />
        <GameTile animationDelay="-9s" />
        <GameTile animationDelay="-10s" />
      </WaterRow>
      <WaterRow>
        <GameTile animationDelay="-5s" />
        <GameTile animationDelay="-6s" />
        <GameTile animationDelay="-7s" />
        <GameTile animationDelay="-8s" />
        <GameTile animationDelay="-9s" />
        <GameTile animationDelay="-10s" />
        <GameTile animationDelay="-11s" />
      </WaterRow>
      <WaterRow>
        <GameTile animationDelay="-6s" />
        <GameTile animationDelay="-7s" />
        <GameTile animationDelay="-8s" />
        <GameTile animationDelay="-9s" />
        <GameTile animationDelay="-10s" />
        <GameTile animationDelay="-11s" />
        <GameTile animationDelay="-12s" />
      </WaterRow>
      <WaterRow>
        <GameTile animationDelay="-7s" />
        <GameTile animationDelay="-8s" />
        <GameTile animationDelay="-9s" />
        <GameTile animationDelay="-10s" color="pink">
          S
        </GameTile>
        <GameTile animationDelay="-11s" />
        <GameTile animationDelay="-12s" />
        <GameTile animationDelay="-13s" />
      </WaterRow>
    </WaterPlane>
  );
};

export default WaterBoard;
