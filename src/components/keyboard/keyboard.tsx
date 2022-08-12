import * as Styled from "./keyboard.styled";

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
    <Styled.Keyboard>
      <Styled.Row>
        <Styled.Key onClick={() => onLetterClick("Q")}>Q</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("W")}>W</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("E")}>E</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("R")}>R</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("T")}>T</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("Y")}>Y</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("U")}>U</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("I")}>I</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("O")}>O</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("P")}>P</Styled.Key>
      </Styled.Row>
      <Styled.Row>
        <Styled.Key onClick={() => onLetterClick("A")}>A</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("S")}>S</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("D")}>D</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("F")}>F</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("G")}>G</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("H")}>H</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("J")}>J</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("K")}>K</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("L")}>L</Styled.Key>
      </Styled.Row>
      <Styled.Row>
        <Styled.FunctionKey onClick={() => onBackSpaceClick()}>
          ←
        </Styled.FunctionKey>
        <Styled.Key onClick={() => onLetterClick("Z")}>Z</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("X")}>X</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("C")}>C</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("V")}>V</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("B")}>B</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("N")}>N</Styled.Key>
        <Styled.Key onClick={() => onLetterClick("M")}>M</Styled.Key>
        <Styled.FunctionKey onClick={() => onEnterClick()}>
          ⏎
        </Styled.FunctionKey>
      </Styled.Row>
    </Styled.Keyboard>
  );
};

export default Keyboard;
