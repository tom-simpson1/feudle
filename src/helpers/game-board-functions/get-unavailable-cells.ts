import { Orientation } from "../../types/game-board-types";

type Props = {
  x: number;
  y: number;
  word: string;
  orientation: Orientation;
};

const getUnavailableCells = ({ word, orientation, x, y }: Props) => {
  const wordCells: { x: number; y: number }[] = [];

  for (let i = -1; i < word.length + 1; i++) {
    if (orientation === "horizontal") {
      wordCells.push({ x: x + i, y: y - 1 });
      wordCells.push({ x: x + i, y: y });
      wordCells.push({ x: x + i, y: y + 1 });
    } else {
      wordCells.push({ x: x - 1, y: y + i });
      wordCells.push({ x: x, y: y + i });
      wordCells.push({ x: x + 1, y: y + i });
    }
  }

  return wordCells;
};

export default getUnavailableCells;
