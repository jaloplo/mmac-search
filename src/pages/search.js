import Link from 'next/link';

import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import useArtwork from "../services/useArtwork";

export default function Search() {
    const { find } = useArtwork();
    const router = useRouter();
    const [results, setResults] = useState([])

    useEffect(() => {
        const keyword = router.query.keyword;
        find(keyword)
            .then(data => setResults(data))
            .catch(err => setResults([]));
    }, []);

    return (<div>
        <h1>Search results</h1>
        <ul>
            { results.map(r => <li key={ r.id }>{ r.id } - { r.title } <Link href={{
                pathname: '/detail',
                query: {
                    id: r.id
                }
            }}>View</Link></li>) }
        </ul>
    </div>);
}