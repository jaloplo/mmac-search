import Link from 'next/link';

import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import Artwork from "../services/ArtworkService";

export default function Search() {
    const router = useRouter();
    const [results, setResults] = useState([])

    useEffect(() => {
        (async () => {
            const keyword = router.query.keyword;
            const data = await Artwork.find(keyword);
            setResults(data);
        })();
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