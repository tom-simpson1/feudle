import { Key, FunctionKey } from "../styled-components/key";
import styled from "styled-components";

const KeyboardRow = styled.div`
  display: flex;
`;

const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
  border-radius: 1rem;
`;

const Keyboard = ({
  onLetterClick,
  onBackSpaceClick,
  onEnterClick,
}: {
  onLetterClick: (letter: string) => void;
  onBackSpaceClick: () => void;
  onEnterClick: () => void;
}) => {
  return (
    <KeyboardContainer>
      <KeyboardRow>
        <Key onClick={() => onLetterClick("Q")}>Q</Key>
        <Key onClick={() => onLetterClick("W")}>W</Key>
        <Key onClick={() => onLetterClick("E")}>E</Key>
        <Key onClick={() => onLetterClick("R")}>R</Key>
        <Key onClick={() => onLetterClick("T")}>T</Key>
        <Key onClick={() => onLetterClick("Y")}>Y</Key>
        <Key onClick={() => onLetterClick("U")}>U</Key>
        <Key onClick={() => onLetterClick("I")}>I</Key>
        <Key onClick={() => onLetterClick("O")}>O</Key>
        <Key onClick={() => onLetterClick("P")}>P</Key>
      </KeyboardRow>
      <KeyboardRow>
        <Key onClick={() => onLetterClick("A")}>A</Key>
        <Key onClick={() => onLetterClick("S")}>S</Key>
        <Key onClick={() => onLetterClick("D")}>D</Key>
        <Key onClick={() => onLetterClick("F")}>F</Key>
        <Key onClick={() => onLetterClick("G")}>G</Key>
        <Key onClick={() => onLetterClick("H")}>H</Key>
        <Key onClick={() => onLetterClick("J")}>J</Key>
        <Key onClick={() => onLetterClick("K")}>K</Key>
        <Key onClick={() => onLetterClick("L")}>L</Key>
      </KeyboardRow>
      <KeyboardRow>
        <FunctionKey onClick={() => onBackSpaceClick()}>←</FunctionKey>
        <Key onClick={() => onLetterClick("Z")}>Z</Key>
        <Key onClick={() => onLetterClick("X")}>X</Key>
        <Key onClick={() => onLetterClick("C")}>C</Key>
        <Key onClick={() => onLetterClick("V")}>V</Key>
        <Key onClick={() => onLetterClick("B")}>B</Key>
        <Key onClick={() => onLetterClick("N")}>N</Key>
        <Key onClick={() => onLetterClick("M")}>M</Key>
        <FunctionKey onClick={() => onEnterClick()}>⏎</FunctionKey>
      </KeyboardRow>
    </KeyboardContainer>
  );
};

export default Keyboard;
