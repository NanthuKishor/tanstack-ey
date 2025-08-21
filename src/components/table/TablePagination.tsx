import { type FC } from "react";
import type {
  ITablePaginationButtonGroup,
  ITablePaginationProps,
} from "../../interface/TableInterface";

const TablePagination: FC<ITablePaginationProps> = ({
  pageNo,
  setPageNo,
  totalPages,
}) => {
  const leftButtonGroup: ITablePaginationButtonGroup[] = [
    {
      id: 1,
      className: "border rounded p-2",
      label: "<<",
      action: () => setPageNo(1),
      disabled: pageNo === 1,
    },
    {
      id: 2,
      className: "border rounded p-2",
      label: "<",
      action: () => setPageNo((prev) => prev - 1),
      disabled: pageNo === 1,
    },
  ];

  const rightButtonGroup: ITablePaginationButtonGroup[] = [
    {
      id: 1,
      className: "border rounded p-2",
      label: ">",
      action: () => setPageNo((prev: number) => prev + 1),
      disabled: pageNo === totalPages,
    },
    {
      id: 2,
      className: "border rounded p-2",
      label: ">>",
      action: () => setPageNo(totalPages),
      disabled: pageNo === totalPages,
    },
  ];

  return (
    <div className="d-flex align-items-center gap-2">
      {leftButtonGroup.map((buttonObj: ITablePaginationButtonGroup) => (
        <button
          key={buttonObj.id}
          className={buttonObj.className}
          onClick={buttonObj.action}
          disabled={buttonObj.disabled}
        >
          {buttonObj.label}
        </button>
      ))}
      <span className="d-flex align-items-center gap-1">
        <span>Page: </span>
        <strong>
          {pageNo} -{""}
          {totalPages}
        </strong>
      </span>
      {rightButtonGroup.map((buttonObj: ITablePaginationButtonGroup) => (
        <button
          key={buttonObj.id}
          className={buttonObj.className}
          onClick={buttonObj.action}
          disabled={buttonObj.disabled}
        >
          {buttonObj.label}
        </button>
      ))}

      <div className="">
        <span className="d-flex align-items-center gap-1">
          | Go to page:
          <input
            type="number"
            min="1"
            max={totalPages}
            defaultValue={1}
            value={pageNo}
            onChange={(e) => {
              const page = e.target.value;
              setPageNo(Number(page));
            }}
            className="border p-1 rounded w-16"
          />
        </span>
      </div>
    </div>
  );
};

export default TablePagination;
