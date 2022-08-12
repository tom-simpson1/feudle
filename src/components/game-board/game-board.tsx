import useBoardData from "../../hooks/game-board/use-board-data";

const GameBoard = ({
  wordStates,
}: {
  wordStates: { word: string; letterStatuses: boolean[] }[];
}) => {
  const BOARD_SIZE = 10;

  const boardData = useBoardData(wordStates, false, BOARD_SIZE);

  return <BoardTiles wordData={boardData} />;
};

export default GameBoard;
