import { WordData } from "../../types/game-board-types";

const getTile = (words: WordData[], x: number, y: number) => {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].word.length; j++) {
      if (
        words[i].x + (words[i].orientation === "horizontal" ? j : 0) === x &&
        words[i].y + (words[i].orientation === "vertical" ? j : 0) === y
      ) {
        return words[i].word[j];
      }
    }
  }
  return undefined;
};

const generateBoardData = (wordPositionData: WordData[], boardSize: number) => {
  const tiles: (string | undefined)[][] = [];

  for (let y = 0; y < boardSize; y++) {
    const row: (string | undefined)[] = [];

    for (let x = 0; x < boardSize; x++) {
      const tile = getTile(wordPositionData, x, y);
      row.push(tile);
    }

    tiles.push(row);
  }

  return tiles;
};

export default generateBoardData;
