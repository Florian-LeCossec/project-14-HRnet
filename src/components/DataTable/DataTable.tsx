import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import "./DataTable.css";
import { useState } from "react";

export interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  title?: string;
  className?: string;
  isLoading?: boolean;
  emptyMessage?: string;
}

export function DataTable<TData>({ data, columns }: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "firstName", desc: false },
  ]);

  const [filtering, setFiltering] = useState<string>("");
  const [pageSize, setPageSize] = useState<number>(10);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onPaginationChange: setPagination,
    state: {
      sorting,
      globalFilter: filtering,
      pagination: { ...pagination, pageSize },
    },
  });

  return (
    <div className="data-table">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Search"
        />
        <label style={{ marginLeft: 16 }}>
          Show
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
              setPagination((prev) => ({ ...prev, pageSize: Number(e.target.value) }));
            }}
            style={{ margin: '0 8px' }}
          >
            {[5, 10, 20, 50].map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          lines per page
        </label>
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: "pointer" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <span style={{ marginLeft: "5px", display: "inline-flex", alignItems: "center" }}>
                      <img
                        src={
                          header.column.getIsSorted() === "asc"
                            ? "/src/assets/sort_asc.png"
                            : header.column.getIsSorted() === "desc"
                            ? "/src/assets/sort_desc.png"
                            : "/src/assets/sort_both.png"
                        }
                        alt="sort"
                        style={{
                          width: "16px",
                          height: "16px",
                          opacity: header.column.getIsSorted()
                            ? 1
                            : 0.4,
                        }}
                      />
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </p>
      <div className="pagination-buttons">
        <button
          className="pagination-btn"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <button
          className="pagination-btn"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
