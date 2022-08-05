import { Box, Text } from "grommet";

const CompletedGuessRow = ({
  guess,
  targetWord,
  isDisabled,
  rowIndex,
}: {
  guess: string;
  targetWord: string;
  isDisabled: boolean;
  rowIndex: number;
}) => {
  if (!isDisabled) {
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
        {guess.split("").map((char, idx) => {
          return (
            <div style={{ margin: "3px" }}>
              <Box
                pad="large"
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
                key={`$completed-guess-box-${targetWord}-${idx}-${rowIndex}`}
              >
                <Text textAlign="center" color="white" weight="bold">
                  {char}
                </Text>
              </Box>
            </div>
          );
        })}
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

export default CompletedGuessRow;
