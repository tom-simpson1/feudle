import { Orientation } from "../../types/game-board-types";

const getUnavailableCells = (
  x: number,
  y: number,
  word: string,
  orientation: Orientation
) => {
  const wordCells: { x: number; y: number }[] = [];

  for (let i = -1; i < word.length + 1; i++) {
    if (orientation === "horizontal") {
      if (i === -1 || i === word.length) {
        wordCells.push({ x: x + i, y: y - 1 });
        wordCells.push({ x: x + i, y: y + 1 });
      }
      wordCells.push({ x: x + i, y: y });
    } else {
      if (i === -1 || i === word.length) {
        wordCells.push({ x: x - 1, y: y + i });
        wordCells.push({ x: x + 1, y: y + i });
      }
      wordCells.push({ x: x, y: y + i });
    }
  }

  return wordCells;
};

export default getUnavailableCells;
