import { BrowserRouter } from "react-router-dom";

import { AlthRoutes } from "./alth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}