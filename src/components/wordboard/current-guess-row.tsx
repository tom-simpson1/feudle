import { Box, Text } from "grommet";

const CurrentGuessRow = ({
  currentGuess,
  targetWord,
  isDisabled,
}: {
  currentGuess: string;
  targetWord: string;
  isDisabled: boolean;
}) => {
  if (!isDisabled) {
    const wordBoxes = [];
    for (let i = 0; i < 5; i++) {
      wordBoxes.push(
        <Box
          width="xxsmall"
          height="xxsmall"
          fill="vertical"
          overflow="auto"
          align="center"
          flex="grow"
          round="xsmall"
          justify="center"
          direction="column"
          background={{ color: "accent-2" }}
          key={`current-guess-box-${targetWord}-${i}`}
        >
          <Text textAlign="center" color="white" weight="bold">
            {currentGuess[i] ?? " "}
          </Text>
        </Box>
      );
    }

    return (
      <Box
        fill="vertical"
        overflow="auto"
        align="center"
        flex="grow"
        round="xsmall"
        justify="center"
        direction="row"
      >
        {wordBoxes}
      </Box>
    );
  } else {
    return (
      <Box
        fill="vertical"
        overflow="auto"
        align="center"
        flex="grow"
        round="xsmall"
        justify="center"
        direction="row"
      />
    );
  }
};

export default CurrentGuessRow;
