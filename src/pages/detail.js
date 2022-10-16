import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import useArtwork from "../services/useArtwork";

export default function Detail() {
    const router = useRouter();
    const [detail, setDetail] = useState(null);

    const { get } = useArtwork();
    useEffect(() => {
        const artworkId = router.query.id;

        if(artworkId) {
            get(artworkId)
                .then(d => setDetail(d))
                .catch(err => setDetail(null));
        }
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