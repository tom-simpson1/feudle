import { useState } from "react";
import useRandomWords from "../../utils/hooks/wordnik/use-random-words";
import Keyboard from "../../components/keyboard/keyboard";
import Wordboard from "../../components/wordboard/wordboard";
import WaterBoard from "../../components/styled-components/water";
import GameBoard from "../../components/game-board/game-board";

const MainGame = () => {
  const numberOfWords = 4;
  const { data, isLoading } = useRandomWords(numberOfWords);

  console.log("Words:", data);

  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  console.log("Current Guess:", currentGuess, "Guesses", guesses);

  const handleLetterClick = (letter: string) => {
    addLetter(letter);
  };

  const handleBackSpaceClick = () => {
    removeLetter();
  };

  const handleEnterClick = () => {
    submitGuess();
  };

  const addLetter = (letter: string) => {
    if (currentGuess.length < 5) {
      setCurrentGuess(currentGuess + letter);
    }
  };

  const removeLetter = () => {
    if (currentGuess.length > 0) {
      setCurrentGuess(currentGuess.substring(0, currentGuess.length - 1));
    }
  };

  const submitGuess = () => {
    if (currentGuess.length === 5) {
      const guessIndex = guesses.indexOf("");
      const newGuesses = guesses;
      newGuesses[guessIndex] = currentGuess;
      setGuesses(newGuesses);
      setCurrentGuess("");
    }
  };

  return (
    <>
      <GameBoard />
      <Keyboard
        onLetterClick={handleLetterClick}
        onBackSpaceClick={handleBackSpaceClick}
        onEnterClick={handleEnterClick}
      />
    </>
  );
};

export default MainGame;
