import * as Styled from "./tiles.styled";
import { memo } from "react";

const BlankTile = ({ animationDelay }: { animationDelay?: number }) => (
  <Styled.WaterTile animationDelay={animationDelay} />
);

const LetterTile = memo(
  ({
    animationDelay,
    flipped,
    letter,
    hideUnflipped,
  }: {
    animationDelay?: number;
    flipped: boolean;
    letter: string;
    hideUnflipped: boolean;
  }) => {
    console.log("letter tile:", animationDelay, flipped, letter, hideUnflipped);
    return (
      <Styled.FlipContainer className={flipped ? "flipped" : ""}>
        <Styled.TileFront>
          {/* {hideUnflipped ? ( */}
          <Styled.WaterTile animationDelay={animationDelay}>
            {letter ? letter : "_"}
          </Styled.WaterTile>
          {/* ) : (
        <Styled.NonGuessedLetterTile animationDelay={animationDelay}>
          N
        </Styled.NonGuessedLetterTile>
        )} */}
        </Styled.TileFront>
        <Styled.TileBack>
          <Styled.GuessedLetterTile animationDelay={animationDelay}>
            {letter}
          </Styled.GuessedLetterTile>
        </Styled.TileBack>
      </Styled.FlipContainer>
    );
  }
);

export { BlankTile, LetterTile };
