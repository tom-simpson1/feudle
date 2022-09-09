import { Orientation } from "../../types/game-board-types";

const getInvalidPositionsForWord = (
  x: number,
  y: number,
  orientation: Orientation,
  length: number
) => {
  const positions: [number, number][] = [];

  for (let i = 0; i < length; i++) {
    if (orientation === "horizontal") {
      if (i === 0) positions.push([x - 1, y]);
      else if (i === length - 1) positions.push([x + length, y]);

      positions.push([x + i, y - 1], [x + i, y], [x + i, y + 1]);
    } else {
      if (i === 0) positions.push([x, y - 1]);
      else if (i === length - 1) positions.push([x, y + length]);

      positions.push([x - 1, y + i], [x, y + i], [x + 1, y + i]);
    }
  }

  return positions;
};

export default getInvalidPositionsForWord;
