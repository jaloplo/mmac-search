import ArtworkModel from "../model/ArtworkModel";

export default function useArtwork() {

    const { mock } = ArtworkModel();

    const get = (artworkId) => {
        return Promise.resolve(mock());
    };

    const find = (keyword) => {
        const data = Array(40).fill(0).map(i => mock());
        return Promise.resolve(data);
    };

    return { get, find };
}