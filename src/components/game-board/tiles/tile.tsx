import * as Styled from "./tiles.styled";

const BlankTile = ({ animationDelay }: { animationDelay?: number }) => (
  <Styled.WaterTile animationDelay={animationDelay} />
);

const LetterTile = ({
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
        {hideUnflipped ? (
          <Styled.WaterTile animationDelay={animationDelay} />
        ) : (
          <Styled.NonGuessedLetterTile animationDelay={animationDelay}>
            {letter}
          </Styled.NonGuessedLetterTile>
        )}
      </Styled.TileFront>
      <Styled.TileBack>
        <Styled.GuessedLetterTile animationDelay={animationDelay}>
          {flipped ? letter : ""}
        </Styled.GuessedLetterTile>
      </Styled.TileBack>
    </Styled.FlipContainer>
  );
};

export { BlankTile, LetterTile };
