import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPAge from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/events", element: <EventsPage /> },
        { path: "/events/:id", element: <EventDetailPage /> },
        { path: "/events/new", element: <NewEventPage /> },
        { path: "/events/:id/edit", element: <EditEventPAge /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
