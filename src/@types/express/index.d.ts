import type { UserSchemaBaseProps } from "../../models/users/types"

declare module 'express' {
  interface Request {
    user?: UserSchemaBaseProps
  }
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: UserSchemaBaseProps
  }
}