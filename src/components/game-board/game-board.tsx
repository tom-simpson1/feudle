import { useMemo } from "react";
import getWordCells from "../../helpers/game-board-functions/get-word-cells";
import { Orientation, WordData } from "../../types/game-board-types";

const generatePositions = (
  wordData: { word: string; letterStatuses: boolean[] }[]
) => {
  const BOARD_SIZE = 10;

  const placedWords: WordData[] = [];

  wordData.forEach(({ word }) => {
    let orientation: Orientation = "horizontal";
    if (Math.random() >= 0.5) {
      orientation = "vertical";
    }

    let x: number;
    let y: number;

    while (true) {
      let positionValid = true;
      if (orientation === "horizontal") {
        x = Math.floor(Math.random() * (BOARD_SIZE - word.length));
        y = Math.floor(Math.random() * BOARD_SIZE);
      } else {
        x = Math.floor(Math.random() * BOARD_SIZE);
        y = Math.floor(Math.random() * (BOARD_SIZE - word.length));
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
          if (unavailableCells.includes(cell)) {
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

const GameBoard = ({
  wordStates,
}: {
  wordStates: { word: string; letterStatuses: boolean[] }[];
}) => {
  const wordList = wordStates.map((wordState) => wordState.word);

  const wordData = useMemo(() => generatePositions(wordStates), [wordList]);

  return <BoardTiles wordData={wordData} />;
};

export default GameBoard;
function getUnavailableCells(
  x: number,
  y: number,
  word: string,
  orientation: string
) {
  throw new Error("Function not implemented.");
}
