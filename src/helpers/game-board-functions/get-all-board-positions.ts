import { Orientation } from "../../types/game-board-types";

const getAllBoardPositions = (
  boardSize: number,
  orientation: Orientation,
  wordLength: number,
  invalidPositions: [number, number][]
) => {
  const positions: [number, number][] = [];

  const maxX =
    orientation === "horizontal"
      ? boardSize - 1 - (wordLength - 1)
      : boardSize - 1;

  const maxY =
    orientation === "vertical"
      ? boardSize - 1 - (wordLength - 1)
      : boardSize - 1;

  for (let x = 0; x <= maxX; x++) {
    for (let y = 0; y <= maxY; y++) {
      if (!invalidPositions.includes([x, y])) positions.push([x, y]);
    }
  }
  return positions;
};

export default getAllBoardPositions;
