import { Box, Text } from "grommet";

const FutureGuessRow = () => {
  console.log("Future Guess Row");
  return (
    <div style={{ margin: "3px" }}>
      <Box
        pad="medium"
        width="xxsmall"
        height="xxsmall"
        fill="horizontal"
        overflow="auto"
        align="center"
        flex="grow"
        round="xsmall"
        justify="center"
        direction="row"
        background={{ color: "accent-2" }}
      >
        <Text textAlign="center" color="white" weight="bold">
          {" "}
        </Text>
      </Box>
    </div>
  );
};

export default FutureGuessRow;
