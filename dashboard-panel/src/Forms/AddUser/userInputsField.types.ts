import type { Path } from "react-hook-form";

import type { UserResponse } from "@api";

export type UserFieldType = {
  name: Path<UserResponse>;
  label: string;
  type: string;
};
