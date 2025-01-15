import { useParams, Link } from "react-router-dom";
export default function EventsDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Events Detail Page</h1>
            <p>{params.id}</p>
            <p>{params.title}</p>
            <p>
                <Link to=".." relative="path">Back</Link>
            </p>
        </>
    );
}