import { useState } from "react";

const useGuesses: () => [string[], (letter: string) => void] = () => {
  const [guesses, setGuesses] = useState<string[]>([]);

  const addGuess = (letter: string) => {
    setGuesses((oldGuesses) => {
      if (oldGuesses.some((guess) => guess === letter)) {
        return oldGuesses;
      } else {
        return [...oldGuesses, letter];
      }
    });
  };

  return [guesses, addGuess];
};

export default useGuesses;
