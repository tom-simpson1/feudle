import { Orientation } from "../../types/game-board-types";

const getInvalidPositionsForWord = (
  x: number,
  y: number,
  orientation: Orientation,
  length: number
) => {
  const positions: [number, number][] = [];

  for (let i = 0; i < length; i++) {
    let primaryDirection;
    let secondaryDirection;

    if (orientation === "horizontal") {
      primaryDirection = x;
      secondaryDirection = y;
    } else {
      primaryDirection = y;
      secondaryDirection = x;
    }

    if (i === 0) positions.push([primaryDirection - 1, secondaryDirection]);
    else if (i === primaryDirection + length - 1)
      positions.push([primaryDirection + length, secondaryDirection]);

    positions.push(
      [primaryDirection + i, secondaryDirection - 1],
      [primaryDirection + i, secondaryDirection],
      [primaryDirection + i, secondaryDirection + 1]
    );
  }

  return positions;
};

export default getInvalidPositionsForWord;
