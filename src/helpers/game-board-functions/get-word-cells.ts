import { Orientation } from "../../types/game-board-types";

const getWordCells = (
  x: number,
  y: number,
  word: string,
  orientation: Orientation
) => {
  const wordCells: { x: number; y: number }[] = [];

  for (let i = 0; i < word.length; i++) {
    if (orientation === "horizontal") {
      wordCells.push({ x: x + i, y: y });
    } else {
      wordCells.push({ x: x, y: y + i });
    }
  }

  return wordCells;
};

export default getWordCells;
