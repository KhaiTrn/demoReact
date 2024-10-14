import { Outlet } from "react-router-dom";

export default function AdminTemplate() {
  return (
    <div>
      <h3>Admin</h3>
      <Outlet />
    </div>
  );
}
