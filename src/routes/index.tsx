import { createFileRoute } from "@tanstack/react-router";
import useTableHook from "../hooks/useTableHook";
import TableWrap from "../components/table/TableWrap";
import TablePagination from "../components/table/TablePagination";
import type { CharacterListSearch } from "../interface/PageInterface";

export const Route = createFileRoute("/")({
  component: Index,
  validateSearch: (search: Record<string, unknown>): CharacterListSearch => {
    return {
      page: Number(search?.page ?? 1),
    };
  },
});

function Index() {
  const {
    isRefetching,
    pageNo,
    table,
    totalPages,
    setPageNo,
    characterList,
    characterRefetch,
  } = useTableHook();

  const handleRefreshClick = () => characterRefetch();

  return (
    <>
      <h1 className="text-center mb-2">Character List</h1>
      <span>List of {characterList?.results?.length} items</span>
      <TableWrap tableObject={table} />
      <div className="d-flex justify-content-between align-items-center w-100 mt-2">
        <TablePagination
          pageNo={pageNo}
          setPageNo={setPageNo}
          totalPages={totalPages}
        />
        <button
          className="refetch-btn"
          disabled={isRefetching}
          onClick={handleRefreshClick}
        >
          {isRefetching ? "Loading..." : "Refresh Data"}
        </button>
      </div>
    </>
  );
}
