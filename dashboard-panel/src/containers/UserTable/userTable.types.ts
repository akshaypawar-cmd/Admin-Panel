import type { ColumnDef } from "@tanstack/react-table";

import type { UserResponse } from "@api";

export interface UserTableProps {
  // Array of user data used to populate the table rows
  data: UserResponse[];
  // Column configuration for TanStack Table
  columns: ColumnDef<UserResponse>[];
}
