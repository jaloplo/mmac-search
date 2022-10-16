export default function useMmacSearchApi() {

    const get = (keyword) => {
        return `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}&hasImages=true`;
    };

    return { get };
}