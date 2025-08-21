import { type FC } from "react";
import { Table as BootTable } from "react-bootstrap";
import TableHead from "./TableHead";
import type { ITableWrapProps } from "../../interface/TableInterface";
import TableBody from "./TableBody";

const TableWrap: FC<ITableWrapProps> = ({ tableObject }) => {
  return (
    <BootTable
      striped
      bordered
      hover
      responsive
      size="sm"
      variant="dark"
      className="fixed-header-table"
    >
      <TableHead tableObject={tableObject} />
      <TableBody tableObject={tableObject} />
    </BootTable>
  );
};

export default TableWrap;
