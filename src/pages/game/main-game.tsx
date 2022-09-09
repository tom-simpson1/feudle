import useRandomWords from "../../utils/hooks/wordnik/use-random-words";
import Keyboard from "../../components/keyboard/keyboard";
import GameBoard from "../../components/game-board/game-board";
import useGuesses from "../../utils/hooks/game-logic/use-guesses";

const MainGame = () => {
  const numberOfWords = 5;
  const { data: words } = useRandomWords(numberOfWords);

  const [guesses, addGuess] = useGuesses();

  if (!words) return <div>loading...</div>;

  return (
    <>
      <GameBoard words={words} guesses={guesses} />
      <Keyboard
        guesses={guesses}
        onLetterClick={(letter) => {
          console.log("current guesses", guesses);
          console.log("guessing", letter);
          addGuess(letter);
        }}
      />
    </>
  );
};

export default MainGame;
