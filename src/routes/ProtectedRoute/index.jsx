import { Navigate } from "react-router-dom";
import { getUserRole } from "../../services/user/user.profile.service";
import ROUTES_PATH from "../routes.constants";
function RoleGuard({ allowedRoles, Component, FallbackComponent }) {
  const role = getUserRole();
  if (!role) {
    return <Navigate to={ROUTES_PATH.loginPage} replace />;
  }
  
  if (!allowedRoles.includes(role)) {
    return FallbackComponent ? (
      <FallbackComponent />
    ) : (
      <Navigate to={ROUTES_PATH.forbitten} replace />
    );
  }

  return <Component role={role} />;
}

export default RoleGuard;
