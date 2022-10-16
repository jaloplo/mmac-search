import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import Artwork from "../services/ArtworkService";

export default function Detail() {
    const router = useRouter();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        (async () => {
            const artworkId = router.query.id;

            if(artworkId) {
                const detail = await Artwork.get(artworkId);
                setDetail(detail);
            }
        })();
    }, [router.query]);

    const onGoingBack = () => {
        router.back();
    };

    return detail !== null && (
        <div>
            <button type="button" onClick={onGoingBack}>Go Back</button>
            <h1>{ detail.title }</h1>
            <img src={ detail.image } />
            <p>{ detail.artistName }</p>
            <p>{ detail.department }</p>
            <p>{ detail.type }</p>
        </div>
    );
}