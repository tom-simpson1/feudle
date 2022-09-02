import { useMemo } from "react";
import generateWordPositions from "../../../helpers/game-board-functions/generate-word-positions";
import generateBoardData from "../../../helpers/game-board-functions/generate-board-data";

const useBoardData = (words: string[], boardSize: number) => {
  const wordPositions = useMemo(
    () => generateWordPositions(words, boardSize),
    [words, boardSize]
  );

  const boardData = useMemo(
    () => generateBoardData(wordPositions, boardSize),
    [wordPositions, boardSize]
  );

  return boardData;
};

export default useBoardData;
