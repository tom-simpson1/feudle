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
        <Styled.Row>
          {rowData.map((letter, x) => {
            const animationDelay = -(x + y) * 600;
            // if (letter)
            return (
              <LetterTile
                animationDelay={animationDelay}
                flipped={guesses.some((guess) => guess === letter)}
                hideUnflipped={HIDE_WORDS}
                letter={letter ?? ""}
              />
            );
            // return <div>{letter}</div>;
            // return <BlankTile animationDelay={animationDelay} />;
          })}
        </Styled.Row>
      ))}
    </Styled.GameBoard>
  );
};

export default GameBoard;
