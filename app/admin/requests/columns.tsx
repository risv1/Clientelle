"use client"

import { ColumnDef } from "@tanstack/react-table"

export type UserTable = {
  id: string,
  email: string,
  username: string,
  password: string,
  role: string
}

export const columns: ColumnDef<UserTable>[] = [
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
    }
]
