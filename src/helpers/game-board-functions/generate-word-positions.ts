import { Orientation, WordData } from "../../types/game-board-types";
import getAllBoardPositions from "./get-all-board-positions";
import getInvalidPositionsForWord from "./get-invalid-positions-for-word";

const generateWordPositions = (words: string[], boardSize: number) => {
  const wordPositions: WordData[] = [];
  const occupiedPositions: [number, number][] = [];

  words.forEach((word) => {
    const orientation: Orientation =
      Math.random() >= 0.5 ? "horizontal" : "vertical";
    const validPositions = getAllBoardPositions(
      boardSize,
      orientation,
      word.length,
      occupiedPositions
    );

    const [x, y] =
      validPositions[Math.floor(Math.random() * validPositions.length)];

    wordPositions.push({ orientation, word, x, y });

    occupiedPositions.push(
      ...getInvalidPositionsForWord(x, y, orientation, word.length)
    );
  });

  return wordPositions;
};

export default generateWordPositions;
