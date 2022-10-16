import useMmacDetail from "./useMmacDetail";
import useMmacSearch from "./useMmacSearch";

const get = async (artworkId) => {
    return await useMmacDetail().get(artworkId);
}

const find = async (keyword) => {
    return await useMmacSearch().find(keyword);
};

export default { get, find };