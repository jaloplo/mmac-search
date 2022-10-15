import { useEffect, useMemo, useState } from "react";
import useMMAC from "../services/useMMAC";

export default function SearchResultsPage({ keyword }) {
    const [search] = useMMAC();
    const [results, setResults] = useState([])

    useEffect(() => {
        search(keyword)
            .then(data => setResults(data))
            .catch(err => setResults([]));
    }, [keyword]);

    return (<div>
        <h1>Search results</h1>
        <ul>
            { results.map(r => <li>{ r.objectID } - { r.title }</li>) }
        </ul>
    </div>);
}