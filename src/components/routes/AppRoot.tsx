import { Outlet } from "react-router-dom";
import MainLayout from "components/shared/Layout/MainLayout";

export default function AppRoot() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
