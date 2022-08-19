import { useMemo } from "react";
import generateWordPositions from "../../../helpers/game-board-functions/generate-word-positions";
import generateBoardData from "../../../helpers/game-board-functions/generate-board-data";

const useBoardData = (
  wordData: { word: string; letterStatuses: boolean[] }[],
  boardSize: number
) => {
  const wordPositions = useMemo(
    () => generateWordPositions(wordData, boardSize),
    [wordData, boardSize]
  );

  const boardData = useMemo(
    () => generateBoardData(wordPositions, boardSize),
    [wordPositions, boardSize]
  );

  return boardData;
};

export default useBoardData;
