const ROUTES_COMPONENTS = [
  { path: "", element: "" },
  {
    path: ROUTES_PATH.profile,
    element: (
      <RoleGuard
        allowedRoles={[ROLES_ID.Provider, ROLES_ID.Customer]}
        Component={ProfilePage}
      />
    ),
    children: [
      {
        index: true,
        element: (
          <RoleGuard
            allowedRoles={[ROLES_ID.Customer, ROLES_ID.Provider]}
            Component={UserProfile}
          />
        ),
      },
      {
        path: ROUTES_PATH.editProfile,
        element: (
          <RoleGuard
            allowedRoles={[ROLES_ID.Customer, ROLES_ID.Provider]}
            Component={EditProfile}
          />
        ),
      },
    ],
  },
];

export default ROUTES_COMPONENTS;
