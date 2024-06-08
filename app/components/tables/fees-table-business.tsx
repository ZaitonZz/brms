"use client"
import * as React from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Row
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { rankItem } from "@tanstack/match-sorter-utils";
import { businessFee } from "@/app/types/types"
import { business } from "@prisma/client"

interface DataTableProps<TData extends businessFee> {
  columns: ColumnDef<TData>[]
  data: TData[]
}

const fuzzyFilter = (row: Row<businessFee>, columnId: string, value: string, addMeta: (itemRank: any) => void) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta(itemRank);
  return itemRank.passed;
};

export function BusinessFeesTable<TData extends businessFee>({
  columns,
  data,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = React.useState('')
  
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter  
    },
    globalFilterFn: fuzzyFilter,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })
  
  return (
    <>
    <div>
        <div className="flex items-center">
          <input
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="py-4 border-2 border-[#71b46b] rounded-lg mb-1 w-96 max-h-2"
          />
        </div>
      </div>
    <div>
    <div className="flex items-center py-4">

      </div>
    </div>
     <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup, index) => (
           
            <TableRow key={headerGroup.id} className="bg-[#558750]">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-slate-100">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        
        <TableBody>
            
          {table.getRowModel().rows?.length ? (
      
            table.getRowModel().rows.map((row,index) => (
              <TableRow
                key={row.id}
                className={index % 2 === 0 ? 'bg-gray-150' : 'bg-[#3a8d318f]'}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                    console.log("portt"),
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
           
            <TableRow>
                
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      
    </div>
    <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
            
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    
    </>
  )
  
}