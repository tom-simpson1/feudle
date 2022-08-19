import { TileData, WordData } from "../../types/game-board-types";

const getTile: (words: WordData[], x: number, y: number) => TileData = (
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
  console.log("generating board data...");
  console.log("data:", wordPositionData);
  console.log("boardSize:", boardSize);

  const tiles: TileData[][] = [];

  for (let y = 0; y < boardSize; y++) {
    console.log("looping y...", y);
    const row: TileData[] = [];

    for (let x = 0; x < boardSize; x++) {
      console.log("looping y...", x);
      const tile = getTile(wordPositionData, x, y);
      row.push(tile);
    }

    tiles.push(row);
  }

  return tiles;
};

export default generateBoardData;
