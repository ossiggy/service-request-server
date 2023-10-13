import type { UserSchemaBaseProps } from "../models/users/types"

declare namespace Express {
  interface Request {
    user?: UserSchemaBaseProps
  }
}