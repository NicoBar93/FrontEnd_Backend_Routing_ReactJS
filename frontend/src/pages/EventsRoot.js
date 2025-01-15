import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
export default function EventsRoute() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
}