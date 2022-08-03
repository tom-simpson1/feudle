import { Box, Text } from "grommet";

type Letter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

const Key = ({
  symbol,
  onClick,
}: {
  symbol: string;
  onClick: (symbol: string) => void;
}) => {
  return (
    <div style={{ margin: "3px" }}>
      <div style={{ cursor: "pointer" }}>
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
          onClick={() => onClick(symbol)}
        >
          <Text textAlign="center" color="white" weight="bold">
            {symbol}
          </Text>
        </Box>
      </div>
    </div>
  );
};

const LetterKey = ({
  letter,
  onClick,
}: {
  letter: Letter;
  onClick: (letter: string) => void;
}) => {
  return <Key symbol={letter} onClick={onClick}></Key>;
};

const BackSpaceKey = ({ onClick }: { onClick: () => void }) => {
  return <Key symbol="←" onClick={() => onClick()}></Key>;
};

const EnterKey = ({ onClick }: { onClick: () => void }) => {
  return <Key symbol="⏎" onClick={() => onClick()}></Key>;
};

export { LetterKey, BackSpaceKey, EnterKey };
