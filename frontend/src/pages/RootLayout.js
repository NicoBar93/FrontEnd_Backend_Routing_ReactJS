import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <main>
        <MainNavigation />
        <Outlet />
      </main>
    </>
  );
}
