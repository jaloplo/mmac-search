import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HiglightedArtworkService from "../services/HiglightedArtworkService";


export default function HighlightedArtworkGallery() {
    const router = useRouter();
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await HiglightedArtworkService.find();
            setArtworks(data);
        })();
    }, []);

    const goToDetail = (artwork) => {
        router.push({
            pathname: '/detail',
            query: { id: artwork.id }
        })
    };

    return (<ul>
        { 
            artworks.map(a => <li key={a.id}>
                <h2>{ a.title }</h2>
                <img src={ a.image } width="128" />
                <button type="button" onClick={() => goToDetail(a) }>View</button>
            </li>)
        }
    </ul>);
}