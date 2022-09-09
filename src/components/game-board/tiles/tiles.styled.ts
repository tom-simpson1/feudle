import styled, { keyframes, css } from "styled-components";
import remy from "../../../utils/helpers/remy";

const waterBobKeyframes = keyframes`
  0% { transform: translate(-0.04rem, 0.09rem); }
  50% { transform: translate(0.04rem, -0.09rem); }
  100% { transform: translate(-0.04rem, 0.09rem); }
`;

type TileProps = {
  animationDelay?: number;
  color?: string;
};
// background-color: ${(props) => props.color ?? "#8bf"};

const Tile = styled.span<TileProps>`
  margin: 0.1rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  box-shadow: 1px 2px #eee;
  animation: ${waterBobKeyframes} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.animationDelay}ms;
`;

export const WaterTile = styled(Tile)`
  background-color: #8bf;
`;

export const GuessedLetterTile = styled(Tile)`
  background-color: pink;
`;

export const NonGuessedLetterTile = styled(Tile)`
  background-color: #bfbfbf;
`;

export const FlipContainer = styled.div`
  // position: relative;
  // width: 100%;
  // min-height: ${remy(380)};
  // cursor: pointer;
  width: 2rem;
  height: 2rem;
  perspective: 1000px;
  transition: all 0.25s ease-in-out;

  &.flipped {
    & > div:first-of-type {
      // front side of tile
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type {
      // back side of tile
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`;

const TileSide = css`
  position: absolute;
  // top: 0;
  // left: 0;
  // overflow: hidden;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.25s ease-in-out;
`;

export const TileFront = styled.div`
  ${TileSide}
`;

export const TileBack = styled.div`
  ${TileSide}
  transform: rotateY(-180deg);
`;

export const TilePadding = styled.div`
  margin: 0.1rem;
`;
