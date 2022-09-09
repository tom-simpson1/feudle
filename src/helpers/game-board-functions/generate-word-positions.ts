import { Orientation, WordData } from "../../types/game-board-types";
import getAllBoardPositions from "./get-all-board-positions";
import getInvalidPositionsForWord from "./get-invalid-positions-for-word";

const generateBoard = (boardSize: number) => {
  const board: boolean[][] = [];

  for (let x = 0; x < boardSize; x++) {
    board.push([]);
    for (let y = 0; y < boardSize; y++) {
      board[x].push(true);
    }
  }

  return board;
};

const getValidWordPositions = (
  board: boolean[][],
  wordLength: number,
  orientation: Orientation
) => {
  const validPositions: [number, number][] = [];

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      let valid = true;
      for (let i = 0; i < wordLength; i++) {
        const cellX = orientation === "horizontal" ? x + i : x;
        const cellY = orientation === "vertical" ? y + i : y;
        if (!board[cellX] || !board[cellX][cellY]) {
          valid = false;
        }
      }
      if (valid) {
        validPositions.push([x, y]);
      }
    }
  }

  return validPositions;
};

const generateWordPositions = (words: string[], boardSize: number) => {
  const booleanBoard = generateBoard(boardSize);
  const wordPositions: WordData[] = [];

  // const debugValues: any = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let orientation: Orientation =
      Math.random() >= 0.5 ? "horizontal" : "vertical";

    let validWordPositions = getValidWordPositions(
      booleanBoard,
      word.length,
      orientation
    );

    if (validWordPositions.length < 1) {
      console.log(
        "oh fuck! flipping from",
        orientation,
        "to",
        orientation === "horizontal" ? "vertical" : "horizontal"
      );

      orientation = orientation === "horizontal" ? "vertical" : "horizontal";

      validWordPositions = getValidWordPositions(
        booleanBoard,
        word.length,
        orientation
      );

      if (validWordPositions.length < 1) {
        throw new Error("Oh fuck!! No valid word positions left!");
      }
    }

    const randPosIdx = Math.floor(Math.random() * validWordPositions.length);

    const [x, y] = validWordPositions[randPosIdx];

    const newlyUnavailablePositions = getInvalidPositionsForWord(
      x,
      y,
      orientation,
      word.length
    );

    newlyUnavailablePositions.forEach(([x, y]) => {
      if (booleanBoard[x] !== undefined && booleanBoard[x][y] !== undefined)
        booleanBoard[x][y] = false;
    });

    wordPositions.push({ x, y, word, orientation });

    // debugValues.push(
    //   JSON.parse(
    //     JSON.stringify({
    //       word,
    //       orientation,
    //       x,
    //       y,
    //       validWordPositions,
    //       newlyUnavailablePositions,
    //       booleanBoard,
    //     })
    //   )
    // );
  }

  // console.log(debugValues);

  return wordPositions;
};

export default generateWordPositions;
