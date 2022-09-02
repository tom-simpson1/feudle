import useBoardData from "../../utils/hooks/game-board/use-board-data";
import * as Styled from "./game-board.styled";
import { BlankTile, LetterTile } from "./tiles/tile";

const GameBoard = ({
  words,
  guesses,
}: {
  words: string[];
  guesses: string[];
}) => {
  const BOARD_SIZE = 10;

  const HIDE_WORDS = false;

  const boardData = useBoardData(words, BOARD_SIZE);

  return (
    <Styled.GameBoard>
      {boardData.map((rowData, y) => (
        <Styled.Row key={`row-${y}`}>
          {rowData.map((letter, x) => {
            const animationDelay = -(x + y) * 600;
            return (
              <LetterTile
                key={`tile (${x}, ${y})`}
                animationDelay={animationDelay}
                flipped={guesses.some((guess) => guess === letter)}
                hideUnflipped={HIDE_WORDS}
                letter={letter ?? ""}
              />
            );
          })}
        </Styled.Row>
      ))}
    </Styled.GameBoard>
  );
};

export default GameBoard;
