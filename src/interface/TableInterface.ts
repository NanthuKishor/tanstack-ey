import type { Table } from "@tanstack/react-table";
import type { ICharacterResultResponse } from "./serviceInterface";

export interface ITableWrapProps {
  tableObject: Table<ICharacterResultResponse>;
}

export interface ITableHeadWrapProps {
  tableObject: Table<ICharacterResultResponse>;
}

export interface ITableBodyWrapProps {
  tableObject: Table<ICharacterResultResponse>;
}

export interface ITablePaginationProps {
  pageNo: number;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export interface ITablePaginationButtonGroup {
  id: number;
  className: string;
  label: string;
  action: () => void;
  disabled: boolean;
}
