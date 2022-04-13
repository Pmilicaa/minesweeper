export interface OpenedCellValue {
  value: string;
}
export interface CellProps {
  x: number;
  y: number;
  onClick: Function;
  isFlagged: boolean;
  //(x: number, y: number) => void
}
