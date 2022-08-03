import { Box } from "grommet";
import { BackSpaceKey, EnterKey, LetterKey } from "./key";

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
        <LetterKey letter="Q" onClick={onLetterClick} />
        <LetterKey letter="W" onClick={onLetterClick} />
        <LetterKey letter="E" onClick={onLetterClick} />
        <LetterKey letter="R" onClick={onLetterClick} />
        <LetterKey letter="T" onClick={onLetterClick} />
        <LetterKey letter="Y" onClick={onLetterClick} />
        <LetterKey letter="U" onClick={onLetterClick} />
        <LetterKey letter="I" onClick={onLetterClick} />
        <LetterKey letter="O" onClick={onLetterClick} />
        <LetterKey letter="P" onClick={onLetterClick} />
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
        <LetterKey letter="A" onClick={onLetterClick} />
        <LetterKey letter="S" onClick={onLetterClick} />
        <LetterKey letter="D" onClick={onLetterClick} />
        <LetterKey letter="F" onClick={onLetterClick} />
        <LetterKey letter="G" onClick={onLetterClick} />
        <LetterKey letter="H" onClick={onLetterClick} />
        <LetterKey letter="J" onClick={onLetterClick} />
        <LetterKey letter="K" onClick={onLetterClick} />
        <LetterKey letter="L" onClick={onLetterClick} />
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
        <BackSpaceKey onClick={onBackSpaceClick} />
        <LetterKey letter="Z" onClick={onLetterClick} />
        <LetterKey letter="X" onClick={onLetterClick} />
        <LetterKey letter="C" onClick={onLetterClick} />
        <LetterKey letter="V" onClick={onLetterClick} />
        <LetterKey letter="B" onClick={onLetterClick} />
        <LetterKey letter="N" onClick={onLetterClick} />
        <LetterKey letter="M" onClick={onLetterClick} />
        <EnterKey onClick={onEnterClick} />
      </Box>
    </Box>
  );
};

export default Keyboard;
