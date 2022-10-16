import ArtworkModel from "../model/ArtworkModel";
import MacObjectProvider from "./MacObjectProvider";
import MacSearchProvider from "./MacSearchProvider";
import SearchResultModel from "../model/SearchResultModel";

const get = async (artworkId) => {
    const object = await MacObjectProvider.get(artworkId);
    const artwork = ArtworkModel.build(object);
    return artwork;
}

const find = async (keyword) => {
    const data = await MacSearchProvider.find(keyword);
    const results = SearchResultModel.build(data);
    const artworkRequests = results.ids.slice(0, 10).map(async (id) => {
        return await get(id);
    });
    return await Promise.all(artworkRequests);
};

export default { get, find };