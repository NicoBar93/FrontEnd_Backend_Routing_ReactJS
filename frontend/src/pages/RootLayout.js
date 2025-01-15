import MainNavigation from "../components/MainNavigation";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <main>
        <EventsNavigation />
        <MainNavigation />
        <Outlet />
      </main>
    </>
  );
}
