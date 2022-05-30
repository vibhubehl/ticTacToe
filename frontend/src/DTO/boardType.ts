export enum PanelType {
    empty = "-",
    zero = "O",
    cross = "X",
  }

export enum GameStatus {
    inProgress = "p",
    crossWon = "Cw",
    zeroWon = "Ow",
    tie = "t",
}

export type boardType = {
    number: PanelType
}

export const ROW_VALUE = 3;
export const COLUMN_VALUE = 3;

export const data: number[][] = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];