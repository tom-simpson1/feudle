import { useState } from "react";

const useGuesses: () => [string[], (letter: string) => void] = () => {
  const [guesses, setGuesses] = useState<string[]>([]);

  const addGuess = (letter: string) => {
    setGuesses((oldGuesses) => [...oldGuesses, letter]);
  };

  return [guesses, addGuess];
};

export default useGuesses;
