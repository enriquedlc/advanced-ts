const enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

function assertNever(value: never) {
  throw new Error(`Unhandled value: ${JSON.stringify(value)}`);
}

function checkPermissions(role: UserRole) {
  switch (role) {
    case UserRole.Admin:
      return "Admin has full access.";
    case UserRole.Editor:
      return "Editor can edit content.";
    // if you remove this case statement, TypeScript will throw an error
    case UserRole.Viewer:
      return "Viewer can only view content.";
    default:
      return assertNever(role);
  }
}

console.log(checkPermissions(UserRole.Editor));
