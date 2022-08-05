import { Box } from "grommet";
import { Key, FunctionKey } from "../styled-components/key";

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
    <Box
      fill="vertical"
      overflow="auto"
      align="center"
      flex="grow"
      round="xsmall"
      justify="center"
      direction="column"
    >
      <Box
        fill="vertical"
        overflow="auto"
        align="center"
        flex="grow"
        round="xsmall"
        justify="center"
        direction="row"
      >
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
      </Box>
      <Box
        fill="vertical"
        overflow="auto"
        align="center"
        flex="grow"
        round="xsmall"
        justify="center"
        direction="row"
      >
        <Key onClick={() => onLetterClick("A")}>A</Key>
        <Key onClick={() => onLetterClick("S")}>S</Key>
        <Key onClick={() => onLetterClick("D")}>D</Key>
        <Key onClick={() => onLetterClick("F")}>F</Key>
        <Key onClick={() => onLetterClick("G")}>G</Key>
        <Key onClick={() => onLetterClick("H")}>H</Key>
        <Key onClick={() => onLetterClick("J")}>J</Key>
        <Key onClick={() => onLetterClick("K")}>K</Key>
        <Key onClick={() => onLetterClick("L")}>L</Key>
      </Box>
      <Box
        fill="vertical"
        overflow="auto"
        align="center"
        flex="grow"
        round="xsmall"
        justify="center"
        direction="row"
      >
        <FunctionKey onClick={() => onBackSpaceClick()}>←</FunctionKey>
        <Key onClick={() => onLetterClick("Z")}>Z</Key>
        <Key onClick={() => onLetterClick("X")}>X</Key>
        <Key onClick={() => onLetterClick("C")}>C</Key>
        <Key onClick={() => onLetterClick("V")}>V</Key>
        <Key onClick={() => onLetterClick("B")}>B</Key>
        <Key onClick={() => onLetterClick("N")}>N</Key>
        <Key onClick={() => onLetterClick("M")}>M</Key>
        <FunctionKey onClick={() => onEnterClick()}>⏎</FunctionKey>
      </Box>
    </Box>
  );
};

export default Keyboard;
