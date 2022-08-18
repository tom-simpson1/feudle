import useBoardData from "../../hooks/game-board/use-board-data";
import * as Styled from "./game-board.styled";
import Tile from "./tile";

const GameBoard = ({
  wordStates,
}: {
  wordStates: { word: string; letterStatuses: boolean[] }[];
}) => {
  const BOARD_SIZE = 10;

  const HIDE_WORDS = false;

  const boardData = useBoardData(wordStates, BOARD_SIZE);

  return (
    <Styled.GameBoard>
      {boardData.map((rowData) => (
        <Styled.Row>
          {rowData.map((tileData) => (
            <Tile tileData={tileData} hideWords={HIDE_WORDS} />
          ))}
        </Styled.Row>
      ))}
    </Styled.GameBoard>
  );
};

export default GameBoard;
