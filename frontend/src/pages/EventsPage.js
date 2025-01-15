import { Link } from "react-router-dom";
export default function EventsPage() {
  const EVENTS = [
    { id: "Circoloco", title: "Circoloco" },
    { id: "Ushuaia", title: "Ushuaia" },
    { id: "Hi", title: "Hi" },
    { id: "Pacha", title: "Pacha" },
    { id: "MusicOn", title: "MusicOn" },
  ];

  return (
    <>
      <h1>List of soon coming events</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
