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
    <div
      className="no-select"
      style={{
        margin: "3px",
        cursor: "pointer",
        width: "35px",
        height: "30px",
        backgroundColor: "pink",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
      }}
    >
      {symbol}
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
