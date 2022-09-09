import useBoardData from "../../utils/hooks/game-board/use-board-data";
import { LetterTile } from "./tiles/tile";

const GameBoard = ({
  words,
  guesses,
}: {
  words: string[];
  guesses: string[];
}) => {
  const BOARD_SIZE = 10;

  const HIDE_WORDS = true;

  const boardData = useBoardData(words, BOARD_SIZE);

  return (
    // <div>hello there</div>
    <table>
      <tbody>
        {boardData.map((rowData, y) => (
          <tr key={`row-${y}`}>
            {rowData.map((letter, x) => {
              const animationDelay = -(x + y) * 600;
              return (
                <td key={`tile (${x}, ${y})`}>
                  <LetterTile
                    animationDelay={animationDelay}
                    flipped={guesses.some((guess) => guess === letter)}
                    hideUnflipped={HIDE_WORDS}
                    letter={letter ?? ""}
                  />
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GameBoard;
