import { Box } from "grommet";
import CompletedGuessRow from "./completed-guess-row";
import CurrentGuessRow from "./current-guess-row";
import FutureGuessRow from "./future-guess-row";

const Wordboard = ({
  targetWord,
  guesses,
  currentGuess,
}: {
  targetWord: string;
  guesses: string[];
  currentGuess: string;
}) => {
  const currentGuessIndex = guesses.indexOf("");
  const targetWordIndex = guesses.indexOf(targetWord);
  console.log(
    targetWord,
    "Current Guess Index",
    currentGuessIndex,
    "Taget Word Index",
    targetWordIndex
  );
  return (
    <Box>
      {guesses.map((guess, idx) => {
        if (idx === currentGuessIndex) {
          return (
            <CurrentGuessRow
              key={`word-row-${targetWord}-${idx}`}
              currentGuess={currentGuess}
              targetWord={targetWord}
              isDisabled={targetWordIndex >= 0 && idx > targetWordIndex}
            />
          );
        } else if (idx < currentGuessIndex || currentGuessIndex !== -1) {
          return (
            <CompletedGuessRow
              key={`word-row-${targetWord}-${idx}`}
              rowIndex={idx}
              guess={guess}
              targetWord={targetWord}
              isDisabled={targetWordIndex >= 0 && idx > targetWordIndex}
            />
          );
        } else {
          return <FutureGuessRow key={`word-row-${targetWord}-${idx}`} />;
        }
      })}
    </Box>
  );
};

export default Wordboard;
