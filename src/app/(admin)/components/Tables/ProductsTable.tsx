"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "product",
    headerName: "Product",
    width: 400,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    editable: true,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
    editable: true,
  },
  //   Modify this one later and make it functioning
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params: GridValueGetterParams) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    product: "Snow",
    price: "184$",
    quantity: "Jon",
    status: "Jon",
  },
  {
    id: 1,
    product: "Snow",
    price: "184$",
    quantity: "Jon",
    status: "Jon",
  },
  {
    id: 1,
    product: "Snow",
    price: "184$",
    quantity: "Jon",
    status: "Jon",
  },
  {
    id: 1,
    product: "Snow",
    price: "184$",
    quantity: "Jon",
    status: "Jon",
  },
  {
    id: 1,
    product: "Snow",
    price: "184$",
    quantity: "Jon",
    status: "Jon",
  },
  {
    id: 1,
    product: "Snow",
    price: "184$",
    quantity: "Jon",
    status: "Jon",
  },
  {
    id: 1,
    product: "Snow",
    price: "184$",
    quantity: "Jon",
    status: "Jon",
  },
  {
    id: 1,
    product: "Snow",
    price: "184$",
    quantity: "Jon",
    status: "Jon",
  },
  {
    id: 1,
    product: "Snow",
    price: "184$",
    quantity: "Jon",
    status: "Jon",
  },
  {
    id: 1,
    product: "Snow",
    price: "184$",
    quantity: "Jon",
    status: "Jon",
  },
  {
    id: 1,
    product: "Snow",
    price: "184$",
    quantity: "Jon",
    status: "Jon",
  },
];

export default function ProductsTable() {
  return (
    <Box sx={{ height: 400, width: "max-content%", marginTop: "2rem" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
