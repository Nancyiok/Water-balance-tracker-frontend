import ROUTES_COMPONENTS from "./routes.config";
import { useRoutes } from "react-router";
function AppRoutes() {
  const routes = useRoutes(ROUTES_COMPONENTS);
  return routes;
}

export default AppRoutes;
