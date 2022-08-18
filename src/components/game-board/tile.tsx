import { TileData } from "../../types/game-board-types";
import * as Styled from "./game-board.styled";

const Tile = ({
  tileData,
  hideWords,
}: {
  tileData: TileData;
  hideWords?: boolean;
}) => {
  if (!tileData) return <Styled.WaterTile />;
  else if (tileData.revealed)
    return (
      <Styled.GuessedLetterTile>{tileData.letter}</Styled.GuessedLetterTile>
    );
  else if (hideWords) return <Styled.WaterTile />;
  else
    return (
      <Styled.NonGuessedLetterTile>
        {tileData?.letter}
      </Styled.NonGuessedLetterTile>
    );
};

export default Tile;
