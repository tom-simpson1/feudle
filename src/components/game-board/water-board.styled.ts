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
// background-color: ${(props) => props.color ?? "#8bf"};

const Tile = styled.span<TileProps>`
  margin: 0.1rem;
  width: 2rem;
  height: 2rem;
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

export const WaterTile = styled(Tile)`
  background-color: #8bf;
`;

export const GuessedLetterTile = styled(Tile)`
  background-color: pink;
`;

export const WaterRow = styled.div`
  display: flex;
`;

export const BoardBackground = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background-color: lightgray;
`;
