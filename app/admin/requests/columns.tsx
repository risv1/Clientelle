"use client";

import { ColumnDef } from "@tanstack/react-table";

export type RequestTable = {
  id: string;
  problem_details: string;
  since_when: string;
  customer_email: string;
  customer_phone: string;
  severity: string;
  category: string;
};

export const columns: ColumnDef<RequestTable>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "problem_details",
    header: "Problem Details",
  },
  {
    accessorKey: "since_when",
    header: "Since When",
  },

  {
    accessorKey: "customer_email",
    header: "Customer Email",
  },
  {
    accessorKey: "customer_phone",
    header: "Customer Phone",
  },
  {
    accessorKey: "severity",
    header: "Severity",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
];
