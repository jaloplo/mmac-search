import ArtworkMockModel from "../model/ArtworkMockModel";

const { build } = ArtworkMockModel();

const get = (artworkId) => {
    return Promise.resolve(build());
};

const find = (keyword) => {
    const data = Array(40).fill(0).map(i => build());
    return Promise.resolve(data);
};

export default { get, find };