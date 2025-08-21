import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type PaginationState,
} from "@tanstack/react-table";
import type { ICharacterResultResponse } from "../interface/serviceInterface";
import { useEffect, useState } from "react";
import { useCharacterListQuery } from "./Queries";
import { Route } from "../routes";
import { useNavigate } from "@tanstack/react-router";

const columns: ColumnDef<ICharacterResultResponse>[] = [
  {
    header: "Sl No",
    accessorKey: "id",
    cell: (info) => info.getValue(),
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: (info) => info.getValue(),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => info.getValue(),
  },
  {
    header: "Gender",
    accessorKey: "gender",
    cell: (info) => info.getValue(),
  },
  {
    header: "Species",
    accessorKey: "species",
    cell: (info) => info.getValue(),
  },
  {
    header: "Location",
    accessorFn: (row) => row.location?.name,
    accessorKey: "location.name",
    cell: (info) => info.getValue(),
  },
  {
    header: "Origin",
    accessorFn: (row) => row.origin?.name,
    accessorKey: "origin.name",
    cell: (info) => info.getValue(),
  },
  {
    header: "Image",
    accessorKey: "image",
    cell: (info) => (
      <img className="character-image" src={info.getValue() as string} />
    ),
  },
];

const useTableHook = () => {
  const { page } = Route.useSearch();

  const [tableData, setTableData] = useState<ICharacterResultResponse[]>([]);
  const [pageNo, setPageNo] = useState<number>(page || 1);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const {
    data: characterList,
    isRefetching,
    refetch: characterRefetch,
  } = useCharacterListQuery({
    page: pageNo,
  });
  const totalPages = characterList?.info?.pages || 0;

  const navigate = useNavigate({ from: Route.fullPath });

  useEffect(() => {
    if (characterList) {
      setTableData(characterList?.results);
    }
  }, [characterList]);

  useEffect(() => {
    navigate({
      search: (prev) => ({ ...prev, page: pageNo }),
      replace: true,
    });
  }, [pageNo, navigate]);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return {
    table,
    totalPages,
    isRefetching,
    pageNo,
    setPageNo,
    characterList,
    characterRefetch,
  };
};

export default useTableHook;
