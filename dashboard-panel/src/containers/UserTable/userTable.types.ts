import type { ColumnDef } from "@tanstack/react-table";

import type { UserResponse } from "@api";

export interface UserTableProps {
  data: UserResponse[];
  columns: ColumnDef<UserResponse, any>[];
}
