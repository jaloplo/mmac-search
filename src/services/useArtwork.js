import useMmacDetail from "./useMmacDetail";
import useMmacSearch from "./useMmacSearch";

export default function useArtwork() {

    const get = async (artworkId) => {
        return await useMmacDetail().get(artworkId);
    };

    const find = async (keyword) => {
        return await useMmacSearch().find(keyword);
    };

    return { get, find };
}