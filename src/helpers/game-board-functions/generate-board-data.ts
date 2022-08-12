import { WordData } from "../../types/game-board-types";

type Tile =
  | undefined
  | {
      letter: string;
      revealed: boolean;
    };

const getTile: (words: WordData[], x: number, y: number) => Tile = (
  words: WordData[],
  x: number,
  y: number
) => {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].word.length; j++) {
      if (
        words[i].x + (words[i].orientation === "horizontal" ? j : 0) === x &&
        words[i].y + (words[i].orientation === "vertical" ? j : 0) === y
      ) {
        return {
          letter: words[i].word[j],
          revealed: words[i].letterStatuses[j],
        };
      }
    }
  }
  return undefined;
};

const generateBoardData = (wordPositionData: WordData[], boardSize: number) => {
  const tiles: Tile[][] = [];

  for (let x = 0; x < boardSize; x++) {
    const row: Tile[] = [];

    for (let y = 0; x < boardSize; y++) {
      const tile = getTile(wordPositionData, x, y);
      row.push(tile);
    }

    tiles.push(row);
  }
};

export default generateBoardData;
