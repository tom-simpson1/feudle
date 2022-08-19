import { TileData } from "../../types/game-board-types";
import * as Styled from "./game-board.styled";

const Tile = ({
  tileData,
  hideWords,
  animationDelay,
}: {
  tileData: TileData;
  hideWords?: boolean;
  animationDelay?: number;
}) => {
  if (!tileData) return <Styled.WaterTile animationDelay={animationDelay} />;
  else if (tileData.revealed)
    return (
      <Styled.GuessedLetterTile animationDelay={animationDelay}>
        {tileData.letter}
      </Styled.GuessedLetterTile>
    );
  else if (hideWords)
    return <Styled.WaterTile animationDelay={animationDelay} />;
  else
    return (
      <Styled.NonGuessedLetterTile animationDelay={animationDelay}>
        {tileData?.letter}
      </Styled.NonGuessedLetterTile>
    );
};

export default Tile;
