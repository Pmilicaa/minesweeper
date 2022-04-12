export interface OpenedCellValue {
  value: string;
}
export interface CellProps {
  x: number;
  y: number;
  onClick: (x: number, y: number) => void;
}
