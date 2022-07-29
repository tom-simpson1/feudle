import { Box, Button, Text } from "grommet";

type Letter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

const Key = ({ letter }:{ letter:Letter }) => {
  return (
    // <Box  margin="xxsmall" width="xxsmall" height="xxsmall" fill="vertical" 
    //   overflow="auto" align="center" flex="grow" round="xsmall" justify="center"
    //   direction="column" background={{"color":"accent-2"}}>
    //   <Text textAlign="center" color="white" weight="bold">
    //     {letter}
    //   </Text>
    // </Box>
    <Button label={letter} margin="xxsmall" fill="vertical" justify="center" />
  );
};

export default Key;