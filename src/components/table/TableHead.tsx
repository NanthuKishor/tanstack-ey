import { flexRender } from "@tanstack/react-table";
import { type FC } from "react";
import type { ITableHeadWrapProps } from "../../interface/TableInterface";

const TableHead: FC<ITableHeadWrapProps> = ({ tableObject }) => {
  return (
    <thead>
      {tableObject.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} colSpan={header.colSpan}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHead;
