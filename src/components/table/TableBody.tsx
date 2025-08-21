import { type FC } from "react";
import type { ITableBodyWrapProps } from "../../interface/TableInterface";
import { flexRender } from "@tanstack/react-table";
import { useNavigate } from "@tanstack/react-router";
import { Route } from "../../routes/character.$characterId";

const TableBody: FC<ITableBodyWrapProps> = ({ tableObject }) => {
  const navigate = useNavigate({ from: Route.fullPath });

  return (
    <tbody className="table-body">
      {tableObject.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="pointer"
          onClick={() =>
            navigate({
              to: "/character/$characterId",
              params: { characterId: String(row.original.id) },
              search: {},
            })
          }
        >
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className="align-middle">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
