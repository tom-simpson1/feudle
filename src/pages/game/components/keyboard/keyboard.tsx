import { Box } from "grommet";
import Key from "./key";

const Keyboard = () => {
  return (
    <Box fill="vertical" overflow="auto" align="center" flex="grow" round="xsmall" justify="center" direction="column" background={{"color":"accent-1"}}>
      <Box fill="vertical" overflow="auto" align="center" flex="grow" round="xsmall" justify="center" direction="row" background={{"color":"accent-1"}}>
        <Key letter='Q' />
        <Key letter='W' />
        <Key letter='E' />
        <Key letter='R' />
        <Key letter='T' />
        <Key letter='Y' />
        <Key letter='U' />
        <Key letter='I' />
        <Key letter='O' />
        <Key letter='P' />
      </Box>
      <Box fill="vertical" overflow="auto" align="center" flex="grow" round="xsmall" justify="center" direction="row" background={{"color":"accent-1"}}>
        <Key letter='A' />
        <Key letter='S' />
        <Key letter='D' />
        <Key letter='F' />
        <Key letter='G' />
        <Key letter='H' />
        <Key letter='J' />
        <Key letter='K' />
        <Key letter='L' />
      </Box>
      <Box fill="vertical" overflow="auto" align="center" flex="grow" round="xsmall" justify="center" direction="row" background={{"color":"accent-1"}}>
        <Key letter='Z' />
        <Key letter='X' />
        <Key letter='C' />
        <Key letter='V' />
        <Key letter='B' />
        <Key letter='N' />
        <Key letter='M' />
      </Box>
    </Box>
  );
};

export default Keyboard;