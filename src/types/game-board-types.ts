export type Orientation = "horizontal" | "vertical";

export type WordData = {
  word: string;
  letterStatuses: boolean[];
  x: number;
  y: number;
  orientation: Orientation;
};

export type TileData =
  | undefined
  | {
      letter: string;
      revealed: boolean;
    };
