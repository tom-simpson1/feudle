import { Orientation, WordData } from "../../types/game-board-types";
import getUnavailableCells from "./get-unavailable-cells";
import getWordCells from "./get-word-cells";

const generateWordPositions = (
  words: { word: string; letterStatuses: boolean[] }[],
  boardSize: number
) => {
  const placedWords: WordData[] = [];

  words.forEach(({ word }) => {
    let orientation: Orientation = "horizontal";
    if (Math.random() >= 0.5) {
      orientation = "vertical";
    }

    let x: number;
    let y: number;

    while (true) {
      let positionValid = true;
      if (orientation === "horizontal") {
        x = Math.floor(Math.random() * (boardSize - word.length));
        y = Math.floor(Math.random() * boardSize);
      } else {
        x = Math.floor(Math.random() * boardSize);
        y = Math.floor(Math.random() * (boardSize - word.length));
      }

      const occupiedCells = getWordCells(x, y, word, orientation);

      placedWords.forEach((placedWord) => {
        const unavailableCells = getUnavailableCells(
          placedWord.x,
          placedWord.y,
          placedWord.word,
          placedWord.orientation
        );

        occupiedCells.forEach((cell) => {
          if (
            unavailableCells.some(
              (unavailableCell) =>
                cell.x === unavailableCell.x && cell.y === unavailableCell.y
            )
          ) {
            positionValid = false;
          }
        });
      });

      if (positionValid) break;
    }

    placedWords.push({
      word,
      letterStatuses: word.split("").map(() => false),
      orientation,
      x,
      y,
    });
  });

  return placedWords;
};

export default generateWordPositions;
