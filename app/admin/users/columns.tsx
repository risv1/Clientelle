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
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
]
