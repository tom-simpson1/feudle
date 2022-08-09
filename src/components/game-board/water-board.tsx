import { WordData } from "../../types/game-board-types";
import * as Styled from "./water-board.styled";

const WaterBoard = ({ wordData }: { wordData: WordData[] }) => {
  const rows: React.ReactNode[] = [];

  for (let i = 0; i < 10; i++) {}

  return <Styled.BoardBackground>{rows}</Styled.BoardBackground>;
};
