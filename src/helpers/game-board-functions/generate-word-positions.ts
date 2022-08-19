import { Orientation, WordData } from "../../types/game-board-types";
import getUnavailableCells from "./get-unavailable-cells";
import getWordCells from "./get-word-cells";

const generateWordPositions = (
  words: { word: string; letterStatuses: boolean[] }[],
  boardSize: number
) => {
  console.log("generating word positions...");
  const placedWords: WordData[] = [];

  words.forEach(({ word }, idx) => {
    console.log(`word ${idx}:`, word);
    let orientation: Orientation = "horizontal";
    if (Math.random() >= 0.5) {
      orientation = "vertical";
    }

    console.log("orientation:", orientation);

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

      console.log("assessing position...", x, y);

      const occupiedCells = getWordCells(x, y, word, orientation);

      console.log("occupied cells:", occupiedCells);

      placedWords.forEach((placedWord) => {
        const unavailableCells = getUnavailableCells(
          placedWord.x,
          placedWord.y,
          placedWord.word,
          placedWord.orientation
        );

        console.log(`checking (${x}, ${y})`);

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
