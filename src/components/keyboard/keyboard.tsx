import * as Styled from "./keyboard.styled";

const LINE_ONE = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const LINE_TWO = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const LINE_THREE = ["Z", "X", "C", "V", "B", "N", "M"];

const Keyboard = ({
  onLetterClick,
  guesses,
}: // wordLetters,
{
  onLetterClick: (letter: string) => void;
  guesses: string[];
  // wordLetters: string[];
}) => {
  return (
    <Styled.Keyboard>
      <Styled.Row>
        {LINE_ONE.map((letter) => {
          if (guesses.includes(letter)) {
            return (
              <Styled.GuessedKey
                key={`letter-key-${letter}`}
                onClick={() => onLetterClick(letter)}
              >
                {letter}
              </Styled.GuessedKey>
            );
          } else {
            return (
              <Styled.Key
                key={`letter-key-${letter}`}
                onClick={() => onLetterClick(letter)}
              >
                {letter}
              </Styled.Key>
            );
          }
        })}
      </Styled.Row>
      <Styled.Row>
        {LINE_TWO.map((letter) => {
          if (guesses.includes(letter)) {
            return (
              <Styled.GuessedKey
                key={`letter-key-${letter}`}
                onClick={() => onLetterClick(letter)}
              >
                {letter}
              </Styled.GuessedKey>
            );
          } else {
            return (
              <Styled.Key
                key={`letter-key-${letter}`}
                onClick={() => onLetterClick(letter)}
              >
                {letter}
              </Styled.Key>
            );
          }
        })}
      </Styled.Row>
      <Styled.Row>
        {LINE_THREE.map((letter) => {
          if (guesses.includes(letter)) {
            return (
              <Styled.GuessedKey
                key={`letter-key-${letter}`}
                onClick={() => onLetterClick(letter)}
              >
                {letter}
              </Styled.GuessedKey>
            );
          } else {
            return (
              <Styled.Key
                key={`letter-key-${letter}`}
                onClick={() => onLetterClick(letter)}
              >
                {letter}
              </Styled.Key>
            );
          }
        })}
      </Styled.Row>
    </Styled.Keyboard>
  );
};

export default Keyboard;
